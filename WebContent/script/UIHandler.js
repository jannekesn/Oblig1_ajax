class UIHandler {

    constructor() {
        this.memberlist = document.createElement("table");
        this.tbody = document.createElement("tbody");

        var thead = document.createElement("thead");
        var row = document.createElement("tr");

        ["Firstname", "Lastname", "Address", "Phone"].forEach(function (el, i) {
            let cell = row.insertCell(i);
            cell.innerHTML = "<b>" + el + "</b>";
        });

        thead.appendChild(row);
        this.memberlist.appendChild(thead);
        this.memberlist.appendChild(this.tbody);

        //this.deleteCallback = (id) => {}
        //this.editCallback = (id) => {}

        this.btnAddMember = document.getElementById("addMember");
        /*this.btnAddMember.addEventListener('click', function () {
            app.box.add()
            this.addMember()
        })*/
    }

    get length() {
        return this.tbody.getElementsByTagName("tr").lenght;
    }

    addMember(member) {
        var row = document.createElement("tr");
        row.id = member.memberId;

        var data = new Array(4);
        data[0] = member.firstname;
        data[1] = member.lastname;
        data[2] = member.address;
        data[3] = member.phone;

        for (var i = 0; i < data.length; i++) {
            let cell = row.insertCell(i);
            cell.innerHTML = data[i];
        }

        var btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Delete";

        var btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Edit";

        row.appendChild(btnDelete);
        row.appendChild(btnEdit);
        this.tbody.appendChild(row);


    }

    deleteMember(id) {
        var rows = this.tbody.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].id == id) {
                this.tbody.deleteRow(i);
            }
        }
    }

    editMember(member) {
        var rows = this.tbody.rows;

        for (var i = 0; i < rows.length; i++) {
            if (rows[i].id == member.memberId) {

                var cells = rows[i].cells;

                let j = 0;
                for (var propt in member) {
                    if (propt == 'memberId') {
                        //Nothing
                    } else if (cells[j].innerHTML != member[propt]) {
                        cells[j].innerHTML = member[propt];
                        j++;
                    } else {
                        j++;
                    }
                }
            }
        }
    }

    set deleteMemberCallback(callback){
        this.deleteCallback = callback
    }

    set editMemberCallback(callback){
        this.editCallback = callback
    }

}

const ui = new UIHandler()
document.getElementById(this.memberlist).appendChild(this.ui.memberlist)