const {createApp} = Vue;

createApp({
    data() {
        return {
            newSkill: "",
            skillist:[
                {Text:"Avere una bella dose di pazienza","done":false},
                {Text:"Essere belli organizzati","done":false},
                {Text:"Settare una buona UI di controllo","done":true}
            ] 
            }
        },
    methods: {
        // AGGIUNTA SKILL
        addSkill() {
            let newSkillz = {Text: this.newSkill,"done":false};
            this.skillist.push(newSkillz);
            this.newSkill = "";
        },
        // TOLTA SKILL
        removeSkill(posizione) {
            this.skillist.splice(posizione,1);
        },
        changeState(posizione) {
            this.skillist[posizione].done = !this.skillist[posizione].done;
            
        },
        conditionColor(posizione) {
            if (this.skillist[posizione].done == false) {
                return "red"           
            }
            else {
                return "green"
            }
        },
        TextOverWritten(posizione) {
            if (this.skillist[posizione].done == false) {
                return "lined"
            }
        }
    }
}).mount("#app")