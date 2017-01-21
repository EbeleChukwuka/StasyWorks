/**
 * Created by Stasy on 14-Jan-17.
 */

angular.module('Database', ['ngStorage'])
    .factory('dbService', function ($localStorage) {

        var dbName = "myDB";

        var db = $localStorage[dbName] || [];
        /*--This creates the database if it is not already existing */


        return {
            create: function (note) {
                note.dataCreated = new Date();
                note.trashed = false;
                db.push(note);
                $localStorage [dbName] = db;
            },

            /**
             * this is used to get our saved notes, if the index is specified use
             * the index to get the record from our db variable
             * else if it is not return the full record
             * @param index
             * @returns {*}
             */
            read: function (index) {     /*--If you exclude index, it means you are spooling all the record */
                if (index != undefined) { //-- This means if it is not undefined //
                    return db [index];   //This index calls only one record //
                }

                return db;
            },

            update: function (index, note) {
                db[index] = note;
                $localStorage [dbName] = db; //--This saves into the database//
            },

            delete: function (id) {
                db[index] = note;
                $localStorage [dbName] = db;
            }

        }

    });