const {createApp} = Vue;

createApp({
    data() {
        return {
            skillist:[
                {Text:"Avere una bella dose di pazienza",done:false},
                {Text:"Essere belli organizzati",done:false},
                {Text:"Settare una buona UI di controllo",done:false}
            ] 
            }
        },
    methods: {

    }
}).mount("#app")