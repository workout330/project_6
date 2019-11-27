function profileChange(){

    edit = document.getElementById('edit')
    var name = document.getElementById('Name')
    var weight = document.getElementById('Weight')
    var height = document.getElementById('Height')

    if(edit.innerHTML == 'Edit Profile') {
        name.removeAttribute('readonly')
        weight.removeAttribute('readonly')
        height.removeAttribute('readonly')
        edit.innerHTML = 'Save'
    }else{
        edit.innerHTML = 'Edit Profile'

        name.setAttribute('readonly', '')
        weight.setAttribute('readonly', '')
        height.setAttribute('readonly', '')
        edit.innerHTML = 'Edit Profile'
    }


}