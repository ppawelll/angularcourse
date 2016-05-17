class githubNotesCtrl {
    constructor($firebaseArray){
      let ref = new Firebase("https://geoinformatyka.firebaseio.com/bslipek");
      this.notes = $firebaseArray(ref);
      console.log(this.notes)
    }
}

let template = 
`

<div class="col-md-4">
  <table class="table">
    <tr ng-repeat="note in $ctrl.notes">
      <td>{{note.text}}</td>
    </tr>
  </table>
</div>
`

let githubNotes = {
    template: template,
    controller: githubNotesCtrl
    
}

export default githubNotes;