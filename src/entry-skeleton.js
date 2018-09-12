import Vue from 'vue';
import home from './skeleton/home';


export default new Vue({
    components: {
      home
    },
    template: `
        <div>
            <home id="home" style="display:none"/>
        </div>
    `
});