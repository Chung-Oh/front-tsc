var BoxPostList = /** @class */ (function () {
    function BoxPostList() {
        this.buttonListSelector = "#" + BoxPostList.boxId + ">button[type=button]";
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', function () {
            _this.hiddenBox();
            var boxForm = document.getElementById(BoxPostForm.boxId);
            boxForm.removeAttribute('style');
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
    return BoxPostList;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm() {
        this.buttonFormSelector = "#" + BoxPostForm.boxId + ">button[type=button]";
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener('click', function () {
            _this.hiddenBox();
            var boxList = document.getElementById(BoxPostList.boxId);
            boxList.removeAttribute('style');
        });
    };
    BoxPostForm.prototype.hiddenBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    };
    BoxPostForm.prototype.showBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute('style');
    };
    BoxPostForm.boxId = 'box-post-form';
    return BoxPostForm;
}());
new BoxPostForm();
new BoxPostList();
/*** Não se deve trabalhar dessa maneira com TypeScript, abaixo é ES6 ***/
// const buttonForm = document.querySelector('#box-post-form>button[type=button]');
// buttonForm.addEventListener('click', () => {
// 	const boxForm = document.getElementById('box-post-form');
// 	boxForm.style.display = 'none';
// 	const boxList = document.getElementById('box-post-list');
// 	boxList.removeAttribute('style');
// });
// const buttonList = document.querySelector('#box-post-list>button[type=button]');
// buttonList.addEventListener('click', () => {
// 	const boxList = document.getElementById('box-post-list');
// 	boxList.style.display = 'none';
// 	const boxForm = document.getElementById('box-post-form');
// 	boxForm.removeAttribute('style');
// });
//# sourceMappingURL=posts.js.map