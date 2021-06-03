import Vue from 'vue'

import cardView from './views/card.vue'
import dashboardView from './views/dashboard.vue'
import recoverView from './views/recover.vue'

import design from './design.less'

import generator from './generator.js';

window.addEventListener("DOMContentLoaded", () => {
    if("serviceWorker" in navigator) navigator.serviceWorker.register('worker.js')

    const app = new Vue({
        el: '#application',
        components: { cardView, dashboardView, recoverView },
        render(createElement) {
            if(window.location.search) {
                if(window.location.search.includes('recover')) {
                    return createElement('recover-view', {props: { identifier: window.location.search.split('recover')[1] }})
                } else {
                    const ID = generator.identifier(window.location.search.substr(1))
                    if(ID) {
                        const data = generator.cardData(ID);
                        console.log(data)
                        return createElement('card-view', {props: { cardData: data }})        
                    }
                }
            }
            return createElement('dashboard-view')
        }
    })
});
