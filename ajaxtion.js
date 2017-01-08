/**
 * Author  : Meksi Abdou
 * Script  : Ajax Request
 * Version : 1.0.1
 * Email   : meksiabdou@gmail.com
 * WebSite : https://www.facebook.com/meksi.abdou
 * License : The MIT License (MIT)
 */

var word_size = "لايسمح تحميل أكثر من حجم 10 MB",
    word_empty = " يجب إختيار ملف مراد تحميله ",
    word_len_files = "لايسمح تحميل أكثر من ملف واحد";

function url() {
    return location.protocol + "//" + window.location.host + "/";
}
/* function in order to create request  */
function create_rq() {
    var xhttp;
    try {
        xhttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                console.log("Probleme In You Browser");
            }
        }
    }
    return xhttp;
}
/* function select id element */
function _(d) {
    return document.getElementById(d);
}

function Selector(Selector) {
    return document.querySelector(Selector);
}
/*  function for create and return loading  */
function ajax_loading(loading) {
    if (loading.trim() !== "") {
        var _Extensions = ["jpg", "jpeg", "bmp", "gif", "png"],
            text = loading.split("."),
            len = text.length;
        if (_Extensions[0] == text[len - 1]) {
            return "<selector class='selector_loading'><img class='loading' src='" + loading +
                "' /></selector>";
        } else if (_Extensions[1] == text[len - 1]) {
            return "<selector class='selector_loading'><img class='loading' src='" + loading +
                "' /></selector>";
        } else if (_Extensions[2] == text[len - 1]) {
            return "<selector class='selector_loading'><img class='loading' src='" + loading +
                "' /></selector>";
        } else if (_Extensions[3] == text[len - 1]) {
            return "<selector class='selector_loading'><img class='loading' src='" + loading +
                "' /></selector>";
        } else if (_Extensions[4] == text[len - 1]) {
            return "<selector class='selector_loading'><img class='loading' src='" + loading +
                "' /></selector>";
        } else {
            return loading;
        }
    } else {
        return "";
    }
}
/* function for filter data request */
function filter(e) {
    return e.replace(/[&\/\\#+()$~%'":*{}]/g, '');
}
/* function for request data select from input by POST */



function ajax(data) {

    var xhttp, form, _data, data_, i, url, selector, loading;

    if (data.slc_respond == undefined) {
        console.log("Error Id  Request undefined");
        return false;
    } else if (data.url == undefined) {
        console.log("Error url Page Request undefined");
        return false;
    } else if (data.form == undefined) {
        console.log("Error Form Name Request undefined");
        return false;
    } else if (data.url.trim() == "") {
        console.log("Error Id Request Empty");
        return false;
    } else if (data.url.trim() == "") {
        console.log("Error url Page Request Empty");
        return false;
    } else if (data.form.trim() == "") {
        console.log("Error Form Name Request Empty");
        return false;
    } else {
        url = data.url;
        selector = Selector(data.slc_respond);
    }
    if (data.loading == undefined) {
        loading = "";
    } else {
        loading = data.loading;
    }

    form = document.getElementsByName(data.form)[0];
    form = form.getElementsByClassName("ajax_value");
    if (form.length == 0) {
        console.log("Error Class Name Input 'ajax_value' is undefined");
        return false;
    }

    for (i = 0; i < form.length; i++) {
        _data += form[i].name + "=" + filter(form[i].value) + "&";
    }

    data_ += _data + "#@/*";
    data_ = (data_.replace("&#@/*", '')).replace("undefinedundefined", "");

    xhttp = create_rq();
    xhttp.onreadystatechange = function() {
        if (this.readyState < 4) {
            selector.innerHTML = ajax_loading(loading);
        }
        if (this.readyState == 4 && this.status == 200) {
            selector.innerHTML = this.responseText;
            if (data.callback !== undefined && data.callback !== "" && Object.prototype.toString.call(data.callback) === '[object String]') {
                callback = new Function("return (" + data.callback + ")");
                _callback = callback();
            } else {
                _callback = "";
            }
            //console.log(_callback);
        }
    };

    xhttp.open("POST", url() + url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data_);

}




/* function for request data by GET */

function ajax_get(data) {
    var xhttp, _data, url,loading, selector, callback, _callback;
    if (data.slc_respond == undefined) {
        console.log("Error Id Request  undefined");
        return false;
    } else if (data.url == undefined) {
        console.log("Error url Page Request undefined");
        return false;
    } else if (data.get == undefined) {
        console.log("Error GET Request undefined");
        return false;
    } else if (data.slc_respond.trim() == "") {
        console.log("Error Id Request Empty");
        return false;
    } else if (data.url.trim() == "") {
        console.log("Error url Page Request Empty");
        return false;
    } else if (data.get.trim() == "") {
        console.log("Error GET Request Empty");
        return false;
    } else {
        url = data.url;
        selector = Selector(data.slc_respond);

    }
    if (data.loading == undefined) {
        loading = "";
    } else {
        loading = data.loading;
    }

    _data = data.get;
    xhttp = create_rq();
    xhttp.onreadystatechange = function() {
        if (this.readyState < 4) {
            selector.innerHTML = ajax_loading(loading);
        }
        if (this.readyState == 4 && this.status == 200) {
            selector.innerHTML = this.responseText;
            if (data.callback !== undefined && data.callback !== "" && Object.prototype.toString.call(data.callback) === '[object String]') {
                callback = new Function("return (" + data.callback + ")");
                _callback = callback();
            } else {
                _callback = "";
            }
            //console.log(_callback);
        }
    };
    xhttp.open("POST", url() + url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(_data)
}
/* function for request and upload files */
function ajax_upload_files(data) {

    var i,
        file_s,
        size,
        fs = _("files"),
        len,
        formdata = new FormData(),
        MB,
        _callback,
        url,
        selector,
        callback,
        loading,
        xhttp;

    if (fs == undefined) {
        console.log("Error Id => 'files' input files is undefined");
        return false;
    }
    if (data.slc_respond == undefined) {
        console.log("Error Id Request  undefined");
        return false;
    } else if (data.url == undefined) {
        console.log("Error url Page Request undefined");
        return false;
    } else if (data.num == undefined) {
        console.log("Error num files Request undefined");
        return false;
    } else if (data.size == undefined) {
        console.log("Error size files Request undefined");
        return false;
    } else if (data.slc_respond.trim() == "") {
        console.log("Error Id Request Empty");
        return false;
    } else if (data.url.trim() == "") {
        console.log("Error url Page Request Empty");
        return false;
    } else if (data.num.trim() == "") {
        len = fs.files.length;
    } else if (data.size.trim() == "") {
        MB = 20485760;
    } else {
        url = data.url;
        selector = Selector(data.slc_respond);
        len = data.num;
        MB = data.size;
    }
    if (data.loading == undefined) {
        loading = "";
    } else {
        loading = data.loading;
    }
    if (fs.files.length == 0) {
        selector.innerHTML = word_empty;
        return false;
    }
    if (fs.files.length > len) {
        selector.innerHTML = word_len_files;
        return false;
    }

    for (i = 0; i < len; i++) {
        file_s = fs.files[i];
        formdata.append("files[]", file_s);
        size = file_s.size;
        if (size > MB) {
            selector.innerHTML = word_size;
            return false;
        }
    }

    xhttp = create_rq();

    xhttp.onreadystatechange = function() {
        if (this.readyState < 4) {
            selector.innerHTML = ajax_loading(loading);
        }
        if (this.readyState == 4 && this.status == 200) {
            selector.innerHTML = this.responseText;
        }
        this.upload.addEventListener("progress",
            function(event) {
                var percent = (event.loaded / event.total) * 100;
                _("progress").style.display = "block";
                _("progressBar").style.width = Math.round(percent) + "%";
                if (event.loaded == event.total) {
                    setTimeout(function() {
                        _("progressBar").style.width = "0%";
                        _("progress").style.display = "none";
                        if (data.callback !== undefined && data.callback !== "" &&
                            Object.prototype.toString.call(data.callback) ===
                            '[object String]') {
                            callback = new Function("return (" + data.callback + ")");
                            _callback = callback();
                        } else {
                            _callback = "";
                        }
                        //console.log(_callback);
                    }, 1500);
                }
            }, false);

    };
    xhttp.open("POST", url() + url, true);
    xhttp.send(formdata);
}
