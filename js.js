
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tab = $$('.tabs')
const panes = $$('.present_tab')

tab.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {

        console.log(pane)
        $('.tabs.active').classList.remove('active')
        $('.present_tab.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')
    }
})
