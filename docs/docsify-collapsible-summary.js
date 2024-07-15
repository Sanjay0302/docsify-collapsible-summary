/* 
* Copyright  2024 Sanjay0302
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*   <http://www.apache.org/licenses/LICENSE-2.0>
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License. 
*/


(function () {
    var collapsibleSummaryPlugin = function (hook) {
        hook.afterEach(function (html) {
            // Process the collapsible summaries
            return html.replace(/\[([^\]]+)\]\{([^}]+)\}/g, function (match, title, content) {
                // Add docsify-ignore to headings in the content
                content = content.replace(/^(#{1,6})\s+(.+)$/gm, '$1 $2 <!-- {docsify-ignore} -->');

                return '<details class="collapsible-summary">' +
                    `<summary>${title}</summary>` +
                    `<div class="summary-content">${marked.parse(content)}</div>` +
                    '</details>';
            });
        });

        // Add event listeners for smooth transitions
        hook.doneEach(function () {
            document.querySelectorAll('.collapsible-summary').forEach(function (summary) {
                summary.addEventListener('toggle', function () {
                    if (this.open) {
                        var content = this.querySelector('.summary-content');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });
        });
    };

    // Add the plugin to window.DocsifyPlugins
    if (!window.$docsify) {
        window.$docsify = {};
    }
    if (!window.$docsify.plugins) {
        window.$docsify.plugins = [];
    }
    window.$docsify.plugins.push(collapsibleSummaryPlugin);
})();