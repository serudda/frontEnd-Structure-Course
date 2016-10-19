/**
 * values() Here we define each core variables
 * such as user logged Id, end points, etc
 *
 * @param {IDataConfig} dataConfig
 * @return {void}
 */

module app.values {

     /**********************************/
     /*           INTERFACES           */
     /**********************************/
     export interface IDataConfig {
         baseUrl: string;
     }

    (function(): void {

        'use strict';

        var dataConfig: IDataConfig = {
            baseUrl: 'https://parking-system-01.herokuapp.com/v1/',
            

        };

        angular.module('psApp').value('dataConfig', dataConfig);

    })();


 }
