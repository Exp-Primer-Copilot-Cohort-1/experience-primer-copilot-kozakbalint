function skillsMember(){
    this.skills = ['Javascript', 'React', 'Node.js'];
    this.number = this.skills.length;
    this.show = function(){
        this.skills.forEach(function(skill){
            console.log(skill);
        });
    }
}