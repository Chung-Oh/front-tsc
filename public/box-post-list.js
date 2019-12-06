define(["require", "exports", "./box-post-form"], function (require, exports, box_post_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxPostList = /** @class */ (function () {
        function BoxPostList(eventManager) {
            this.eventManager = eventManager;
            this.buttonListSelector = "#" + BoxPostList.boxId + ">button[type=button]";
            this.init();
        }
        BoxPostList.prototype.init = function () {
            var _this = this;
            var buttonList = document.querySelector(this.buttonListSelector);
            buttonList.addEventListener('click', function () {
                _this.hiddenBox();
                // const boxForm = document.getElementById(BoxPostForm.boxId);
                // boxForm.removeAttribute('style');
                _this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);
            });
            this.eventManager.addListerner(box_post_form_1.BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, function () {
                _this.showBox();
            });
        };
        BoxPostList.prototype.hiddenBox = function () {
            var boxList = document.getElementById(BoxPostList.boxId);
            boxList.style.display = 'none';
        };
        BoxPostList.prototype.showBox = function () {
            var boxList = document.getElementById(BoxPostList.boxId);
            boxList.removeAttribute('style');
        };
        BoxPostList.boxId = 'box-post-list';
        BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST = 'list';
        return BoxPostList;
    }());
    exports.BoxPostList = BoxPostList;
});
//# sourceMappingURL=box-post-list.js.map