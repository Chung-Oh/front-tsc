define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Orientação a Evento
    var EventManager = /** @class */ (function () {
        function EventManager() {
            this.listerners = {}; // ouvintes
        }
        // No param callable pode-se usar '{(): void}', tem mesmo efeito de ListernerInterface
        EventManager.prototype.addListerner = function (eventName, callable) {
            if (!(this.listerners[eventName] instanceof Array)) {
                this.listerners[eventName] = [];
            }
            this.listerners[eventName].push(callable);
        };
        EventManager.prototype.runEvent = function (eventName) {
            for (var _i = 0, _a = this.listerners[eventName]; _i < _a.length; _i++) {
                var callable = _a[_i];
                callable();
            }
        };
        return EventManager;
    }());
    exports.EventManager = EventManager;
});
//# sourceMappingURL=event-manager.js.map