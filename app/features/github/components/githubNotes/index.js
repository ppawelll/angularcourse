class githubNotesCtrl {
    contructor($firebaseArray){
        console.log('cos')
      let ref = new Firebase("https://geoinformatyka.firebaseio.com/bslipek");
      this.notes = $firebaseArray(ref);
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
    controller: githubNotesCtrl,
    template: template
}

export default githubNotes;