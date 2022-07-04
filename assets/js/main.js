"use strict";
let excel = {
    "init": {
        "ROWS":50,
        "WIDTH0":30,
        "WIDTH1":100,
        "headers":['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    },
    "Excel_set": function () {
        let timestamp = String(new Date().getTime());
        this.insertAdjacentHTML("beforeend","<table id='tbl-" + timestamp +"'></table>");
        let table = document.querySelector("table[id^='tbl-" + timestamp + "']");

        //テーブルの幅設定
        table.setAttribute("width", this.init.WIDTH0 + this.init.WIDTH1 * this.init.headers.length);
        //ヘッダー 余白 セル設定
        let row = table.insertRow(-1);
        let th0 = document.createElement("th");
        row.appendChild(th0);
        th0.innerHTML = " ";
        th0.setAttribute("width", this.init.WIDTH0);
        //ヘッダー A-Z セル設定
        this.init.headers.forEach((value, index, num) => {
            let th = document.createElement("th");
            row.appendChild(th);
            th.innerHTML = value;
            th.setAttribute("width", this.init.WIDTH1);
        });

        //セル設定
        let cell1 = null;
        let cell = null;

        for (let y = 1; y <= this.init.ROWS; y++) {
            row = table.insertRow(-1);
            cell1 = document.createElement("th");
            row.appendChild(cell1);
            cell1.innerHTML = y;
            for (let x = 1; x <= this.init.headers.length; x++) {
                cell = row.insertCell(-1);
                cell.className = 'value';
                cell.setAttribute('contenteditable', 'true')
                cell.setAttribute('id', 'R' + y + 'C' + x);
            }
        }
        this.event(table);
    },
    "event":function(table){
        //クリックイベント
        let tr = table.querySelectorAll("tr");
        table.addEventListener("click", function (e) {
            if (e.target.tagName.toLowerCase() === "td") {
                //全て背景色白
                for (let i = 0; i < tr.length; i++) {
                    tr[i].style.backgroundColor = "white";
                }
                e.target.parentNode.style.backgroundColor = "#eef";
            }
        }, false);
    }
};
let elm1 = Object.assign(document.querySelector("div"),excel);
elm1.init.WIDTH0 = 39;
elm1.init.ROWS = 99;
elm1.Excel_set();
let elm2 = Object.assign(document.querySelector("span"),excel);
elm2.init.WIDTH0 = 39;
elm2.init.ROWS = 99;
elm2.Excel_set();