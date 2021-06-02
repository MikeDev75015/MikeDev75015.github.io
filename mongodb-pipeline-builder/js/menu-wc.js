'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mongodb-pipeline-builder documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PipelineBuilder.html" data-type="entity-link">PipelineBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/PipelineError.html" data-type="entity-link">PipelineError</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BucketAutoStageInterface.html" data-type="entity-link">BucketAutoStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BucketStageInterface.html" data-type="entity-link">BucketStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BuilderOptionsInterface.html" data-type="entity-link">BuilderOptionsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CollStatsStageInterface.html" data-type="entity-link">CollStatsStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrentOpInterface.html" data-type="entity-link">CurrentOpInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DebugBuildInterface.html" data-type="entity-link">DebugBuildInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DebugHistoryInterface.html" data-type="entity-link">DebugHistoryInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacetStageInterface.html" data-type="entity-link">FacetStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeoNearStageInterface.html" data-type="entity-link">GeoNearStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetResultResponseInterface.html" data-type="entity-link">GetResultResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GraphLookupStageInterface.html" data-type="entity-link">GraphLookupStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupStageInterface.html" data-type="entity-link">GroupStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InitOptionsInterface.html" data-type="entity-link">InitOptionsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LookupConditionInterface.html" data-type="entity-link">LookupConditionInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LookupEqualityInterface.html" data-type="entity-link">LookupEqualityInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LookupStageInterface.html" data-type="entity-link">LookupStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MergeStageInterface.html" data-type="entity-link">MergeStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OutStageInterface.html" data-type="entity-link">OutStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReplaceRootStageInterface.html" data-type="entity-link">ReplaceRootStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResultProperty.html" data-type="entity-link">ResultProperty</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SampleStageInterface.html" data-type="entity-link">SampleStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StageErrorInterface.html" data-type="entity-link">StageErrorInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StageInterface.html" data-type="entity-link">StageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TestResultInterface.html" data-type="entity-link">TestResultInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UnionWithStageInterface.html" data-type="entity-link">UnionWithStageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UnwindStageInterface.html" data-type="entity-link">UnwindStageInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});