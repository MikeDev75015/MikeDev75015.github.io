document.addEventListener('DOMContentLoaded', function() {
    (function () {
        /**
         * Url of widget files
         * @type {string}
         */
        var URL_WIDGET = window.location.host.includes('localhost')
            ? './mongodb-pipeline-widget'
            : 'https://mikedev75015.github.io/mongodb-pipeline-widget';
        /**
         * Url of the mongodb pipeline tester
         * @type {string}
         */
        var URL_TESTER = window.location.host.includes('localhost')
            ? 'http://localhost:4201'
            : 'https://mongodb-pipeline-tester.web.app';

        /**
         * Displays a message if an error is encountered
         * @param message The message to display
         */
        function onError(message) {
            console.error(
                "An error has occurred:\n",
                " => ", message
            );
        }

        /**
         * Runs window function according to the message received
         * @param message
         */
        function onIframeMessage(message) {
            window[message]();
        }

        /**
         * Loads styles of widget elements
         */
        function loadStyles() {
            if (!document.querySelector('#mpt-widget-styles')) {
                var link = document.createElement('link');
                link.id = 'mpt-widget-styles';
                link.onerror = function() {
                    onError("widget styles not loaded");
                }
                link.onload = addWidgetOpenCloseBtn;
                link.href = URL_WIDGET + '/styles/main.css';
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            } else {
                addWidgetOpenCloseBtn();
            }
        }

        /**
         * Adds the button that opens or closes the widget
         */
        function addWidgetOpenCloseBtn() {
            if (!document.querySelector("div#mpt-widget-btn")) {
                var mptWidgetBtn = document.createElement('button');
                mptWidgetBtn.id = 'mpt-widget-btn';
                mptWidgetBtn.title = 'mongodb-pipeline-widget';
                mptWidgetBtn.innerText = 'MPT';
                mptWidgetBtn.onclick = onClickWidgetBtn;
                document.body.appendChild(mptWidgetBtn);
            }
        }

        /**
         * Manage the click on the open / close button of the widget
         */
        function onClickWidgetBtn() {
            disableMptWBtn(true);
            var widgetSection = document.querySelector('#mpw-section');
            if (!widgetSection) {
                loadWidget();
                if (window) {
                    window.toggleOpenCloseWidget = toggleOpenCloseWidget;
                }
                return;
            }
            toggleOpenCloseWidget();
            disableMptWBtn(false);
        }

        /**
         * Loads the widget into the page
         */
        function loadWidget() {
            var mpwSection = document.querySelector('#mpw-section');

            if (!mpwSection) {
                var section = document.createElement('section');
                section.id = 'mpw-section';
                document.body.appendChild(section);
                mpwSection = document.querySelector('#mpw-section');
            }

            var mpwIframe = document.querySelector('#mpw-section > iframe');
            if (!mpwIframe) {
                var iframe = document.createElement('iframe');
                iframe.src = URL_TESTER;
                iframe.setAttribute('frameBorder', '0');
                mpwSection.appendChild(iframe);

                addIframeContentMessageListener();
            }
            disableMptWBtn(false);
        }

        /**
         * Shows / hides the widget
         * @returns a boolean that confirms the opening state of the widget
         */
        function toggleOpenCloseWidget() {
            var mpwIframe = document.querySelector('#mpw-section > iframe');
            if (mpwIframe.style.display === 'none') {
                showWidget(mpwIframe);
            } else {
                hideWidget(mpwIframe);
            }
        }

        /**
         * Shows the widget
         * @param mpwIframe The widget element to show
         */
        function showWidget(mpwIframe) {
            mpwIframe.style.display = 'block';
        }

        /**
         * Hides the widget
         * @param mpwIframe The widget element to hide
         */
        function hideWidget(mpwIframe) {
            mpwIframe.style.display = 'none';
        }

        /**
         * Adds an Iframe content message listener
         */
        function addIframeContentMessageListener() {
            window.addEventListener('message', event => {
                if (!event.origin.startsWith(URL_TESTER)) {
                    return;
                }
                onIframeMessage(event.data);
            });
        }

        /**
         * Disables / Enables the tester's open / close button
         * @param requestedStatus The boolean corresponding to the requested status
         */
        function disableMptWBtn(requestedStatus) {
            var mptWBtn = document.querySelector("div#mpt-widget-btn");
            if (mptWBtn) {
                mptWBtn.disabled = requestedStatus;
            }
        }

        // code
        loadStyles();
    })();
});
