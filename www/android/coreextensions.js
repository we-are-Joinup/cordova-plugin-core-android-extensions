var exec = require("cordova/exec");
var APP_PLUGIN_NAME = "CoreAndroidExtensions";

module.exports = {
    /**
    * Go to home screen
    */
    minimizeApp: function(moveBack) {
        return exec(null, null, APP_PLUGIN_NAME, "minimizeApp", [moveBack]);
    },

    /**
    * Return app to foreground
    */
    resumeApp: function() {
        return exec(null, null, APP_PLUGIN_NAME, "resumeApp", []);
    },

    /**
     * Detect app availability
     */
    detectApp: function(packageName, successCallback, errorCallback) {
        return exec(successCallback, errorCallback, APP_PLUGIN_NAME, "detectApp", [packageName]);
    },

    /**
     * Trigger app uninstall dialog
     */
    uninstallApp: function(packageName, successCallback, errorCallback) {
        return exec(successCallback, errorCallback, APP_PLUGIN_NAME, "uninstallApp", [packageName]);
    },

    /**
     * Return check overlay is activated
     */
    checkOverlayActivated: function(successCallback) {
        return exec(successCallback, null, APP_PLUGIN_NAME, "checkOverlayActivated");
    }
};
