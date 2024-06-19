/*!
 * reveal.js PubNub Remote Control Plugin v. 0.1.3
 * https://github.com/salvatorecordiano/reveal-js-pubnub-remote-control-plugin/
 *
 * Copyright (C) 2016-2017 Salvatore Cordiano, http://www.salvatorecordiano.it/
 * Released under the MIT license
 */

(function () {

    'use strict';

    var PubnubRemoteControl = (function () {

        var defaultProperties = {
            subscribeKey: null,
            publishKey: null,
            userID: null,
            inputChannel: 'input',
            outputChannel: 'output'
        };

        var thiz = function (customProperties) {

            var options = {};
            var pubnub;

            if (customProperties && typeof customProperties === 'object') {
                extendDefaultProperties(options, customProperties);
            }

            initPubNub();
            options.publishKey && initReveal();

            function initPubNub() {
                console.log(options.publishKey);
                pubnub = new PubNub({ publishKey: options.publishKey, subscribeKey: options.subscribeKey, userId: "Reveal", ssl: true });
                pubnub.subscribe({ channels: [options.inputChannel] });
                pubnub.addListener({
                    message: function (event) {
                        console.log(event);
                        processInput(event.message);
                    }
                });
            }

            function initReveal() {
                var indices = Reveal.getIndices();
                sendUpdate(indices.h, indices.v);

                Reveal.addEventListener('slidechanged', function (event) {
                    sendUpdate(event.indexh, event.indexv);
                });
            }

            function sendUpdate(slide, part) {
                pubnub.publish({
                    channel: options.outputChannel,
                    message: { slide: (slide + 1), part: (part + 1) }
                });
            }

            function extendDefaultProperties(options, customProperties) {
                var property;
                for (var property in defaultProperties) {
                    if (defaultProperties.hasOwnProperty(property)) {
                        options[property] = defaultProperties[property];
                    }
                }
                for (property in customProperties) {
                    if (customProperties.hasOwnProperty(property)) {
                        options[property] = customProperties[property];
                    }
                }
            }

            function processInput(input) {
                // console.trace();
                console.log(input);
                // log what type input is
                console.log('typeof input: ' + typeof input);
                console.log('input.button: ' + input['button']);
                if (typeof input === 'string') {
                    try {
                        // Replace single quotes with double quotes and parse as JSON
                        input = JSON.parse(input.replace(/'/g, '"'));
                    } catch (e) {
                        console.error('Failed to parse input:', e);
                        return;
                    }
                }


                if (input && typeof input === 'object' && input.button) {
                console.log('input.button: ' + input.button);
                console.log('input.button: ' + input.button);
                switch (input.button) {
                    case 'left':
                        Reveal.navigateLeft();
                        break;
                    case 'right':
                        Reveal.navigateRight();
                        break;
                    case 'up':
                        Reveal.navigateUp();
                        break;
                    case 'down':
                        Reveal.navigateDown();
                        break;
                    case 'next':
                        Reveal.next();
                        break;
                    
                }
            }
        }
    };

    return thiz;

})();

Reveal.getConfig().pubnubRemoteControl && new PubnubRemoteControl(Reveal.getConfig().pubnubRemoteControl);

}());
