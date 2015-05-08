'use strict';

/**
 * @ngdoc directive
 * @name phrPrototypeApp.directive:timelineIcon
 * @description
 * # timelineIcon
 */
angular.module('phrPrototypeApp')
    .directive('timelineIcon', function ($compile) {
        return {
            template: '<i class="fa fa-2x"></i>',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

                var iconMap = [{
                    type: 'allergies',
                    icon: 'fa-exclamation-triangle'
                }, {
                    type: 'encounters',
                    icon: 'fa-stethoscope'
                }, {
                    type: 'immunizations',
                    icon: 'fa-shield'
                }, {
                    type: 'medications',
                    icon: 'fa-plus-circle'
                }, {
                    type: 'conditions',
                    icon: 'fa-list'
                }, {
                    type: 'procedures',
                    icon: 'fa-medkit'
                }, {
                    type: 'vitals',
                    icon: 'fa-heart'
                }, {
                    type: 'results',
                    icon: 'fa-flask'
                }, {
                    type: 'social',
                    icon: 'fa-group'
                }];

                var iconEntry = _.findWhere(iconMap, {
                    type: attrs.timelineIconType
                });

                if (iconEntry) {
                    if (iconEntry.type === 'medications') {
                        var html = '<img ng-src=images/benadryl_test.jpeg>';
                        if (attrs.timelineIconMeta) {
                            var iconMeta = JSON.parse(attrs.timelineIconMeta);
                            if (iconMeta.image) {
                                if (iconMeta.image.imageUrl) {
                                    if (iconMeta.image.imageUrl !== "") {
                                        html = '<img ng-src=' + iconMeta.image.imageUrl + '>';
                                    }
                                }
                            }
                        }
                        var i = $compile(html)(scope);
                        element.children().replaceWith(i);
                    } else {
                        element.children().addClass(iconEntry.icon);
                    }
                } else {
                    element.children().addClass('fa-pencil');
                }

                element.children().attr("id", "entry" + attrs.timelineIndex);

            }
        };
    });
