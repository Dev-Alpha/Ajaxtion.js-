## Synopsis
   Simple scripts to help you request and upload files by **Three Functions**
## Code Example
    
* syntax order to request function ajax()
* var data = {"slc_respond" :"#id_post","form":"form_add","url":"apps/controller/login.php","loading" : "img/loading.gif" }
* ajax(data)
* slc_respond => element that will render the respond
* form => form name
* url => Send the request off to a PHP file
* loading => file or text for show loading
* callback => "" // function after run request
* Example => ```<script> var data = {"slc_respond" :"#id_post","form":"form_add","url":"apps/controller/login.php","loading" : "img/loading.gif" ,"callback" : "" } </script>
            <form action="javascript:ajax(data)" method="POST" name="form_add" >
              <input class="ajax_value" type="email" name="email" />
              <input class="ajax_value" type="password" name="password" />
               <select class="ajax_value" name="sex">
                   <option value="Man">Man</option>
                   <option value="Woman">Woman</option>
               </select>   
              <input type="submit" value="submit" >
            </form>  
            <div id="id_post"></div>```
            
* Condition => naming class input ajax_value => class="ajax_value"

* syntax order to request function ajax_get()
* var data = {"slc_respond" :"#dev_raq","get": "search = Example","url":"search.php","loading" : "" ,"callback" : "setTimeout(function () {_('dev_raq').innerHTML ='';}, 500);" } ;
* ajax_get(data);
* slc_respond => element that will render the respond
* form => form name
* url => Send the request off to a PHP file
* loading => file or text for show loading
* callback => "" //function after run request
* Example => ```<form action="javascript:return false" method="GET" >
            <input  name="oq" type="text" onkeyup="search_ajax(this.valeu);" />
              <input type="submit" value="Go" >
            </form>
            <div id="req_search"></div>
            <script>
                   function search_ajax(valeu){
                       var data =
                               {"slc_respond" :"#req_search",
                                "get": "search = " + valeu,
                                 "url":"search.php",
                                 "loading" : "" ,
                                 "callback" : "" // function after run request
                               } ;
                       ajax_get(data);                     
                   }
            </script>```

* syntax order to request function ajax_upload_files()
* var file = {"slc_respond" :"#fileshow",num": "1","size": "20485760","url":"apps/controller/upload.php?q=upload","loading" : "" ,"callback" : ""} ;
* ajax_upload_files(file);
* id  => element that will render the respond
* num => number files uploading
* size => size files by byt
* url => Send the request off to a PHP file
* loading => file or text for show loading
* callback => "" //function after run request
* Condition => naming id and name input id = "files" name="files" and creat <div id="progress"><div id="progressBar"></div></div>
* Example =>```<script>  
                var file =
               {
                   "slc_respond" :"#resp_file",
                   "num": "1",
                   "size": "20485760",
                   "url":"apps/controller/upload.php?q=upload",
                   "loading" : "" ,
                   "callback" : ""
               } ;
           </script>
            <form action="javascript:ajax_upload_files(file)" method="POST" >
              <input id="files" type="file" name="files" multiple="multiple" />
              <input type="submit" value="submit" >
            </form>  
            <div id="resp_file"></div>   
            <div id="progress"><div id="progressBar"></div></div>```

    
## Installation 

   include file **ajaxtion.js** or **ajaxtion.min.js** before end tags body 
   ```<script src="js/ajaxtion.min.js" ></script>```

## API Reference

   * Function 1 : **ajax()**
   * Function 2 : **ajax_get()**
   * Function 3 : **ajax_upload_files()**

## Contributors

  * Author  : Meksi Abdennour
  * Script  : Ajax Request
  * Version : 1.0.1
  * Email   : meksiabdou@gmail.com
  * WebSite : https://www.facebook.com/meksi.abdou
  
## License

   The MIT License (MIT)
   
