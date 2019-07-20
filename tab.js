class Tab {
    /*
      li的选择器   navSelector
      内容的选择器 contentSelector
      触发的事件类型 type
      特殊的li的类名 navClass
      显示隐藏内容的类navClass名 contentClass
    */
    constructor(options) {
        options = options || {};
        this.navSelector = options.navSelector || '.nav>li';
        this.contentSelector = options.contentSelector || '.content';
        this.type = options.type || 'mouseover';
        this.navClass = options.navClass || 'active';
        this.contentClass = options.contentClass || 'show';
    }
    addEvent() {
        let _this = this;
        let li = document.querySelectorAll(_this.navSelector);
        let content = document.querySelectorAll(_this.contentSelector);
        li.forEach((e, i) => {
            e.addEventListener(this.type, function () {
                li.forEach(e => {
                    e.classList.remove(_this.navClass)
                })
                this.classList.add(_this.navClass);
                content.forEach(e => {
                    e.classList.remove(_this.contentClass);
                })
                content[i].classList.add(_this.contentClass);
            })
        })
    }
}