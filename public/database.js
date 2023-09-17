
var firebaseConfig = {
  apiKey: "AIzaSyDk4Syexhxh2aG3gdMIJFM4exwdMfTDE3I",
  authDomain: "promo-v3.firebaseapp.com",
  databaseURL: "https://promo-v3-default-rtdb.firebaseio.com",
  projectId: "promo-v3",
  storageBucket: "promo-v3.appspot.com",
  messagingSenderId: "304902424957",
  appId: "1:304902424957:web:7b2a3d2bc495b99fb82414",
  measurementId: "G-GH15ZS4W67"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function displayData() {
  var dataDisplay = document.getElementById("availability_desktop");
  var dataHeader = document.getElementById("header_headline");
  var dataHeader_intro = document.getElementById("header_intro");
  var dataButton_1 = document.getElementById("button_label_1");
  var dataButton_2 = document.getElementById("button_label_2");
  var dataDbBackground = document.getElementById("db_background");
  var publicDataRef = database.ref('publicDataDashboard');
  
  publicDataRef.on('value', function(snapshot) {
      var data = snapshot.val();
      
      if (data) {
          if (data.hasOwnProperty("value")) {
              dataDisplay.value = data.value;
          } else {
              dataDisplay.value = "";
          }

          if (data.hasOwnProperty("header")) {
              dataHeader.value = data.header;
          } else {
              dataHeader.value = "";
          }
          if (data.hasOwnProperty("header_intro")) {
              header_intro.value = data.header_intro;
          } else {
              header_intro.value = "";
          }
          if (data.hasOwnProperty("button_label_1")) {
              dataButton_1.value = data.button_label_1;
          } else {
              dataButton_1.value = "";
          }
          if (data.hasOwnProperty("button_label_2")) {
              dataButton_2.value = data.button_label_2;
          } else {
              dataButton_2.value = "";
          }
          if (data.hasOwnProperty("db_background")) {
            dataDbBackground.value = data.db_background;
        } else {
            dataDbBackground.value = "";
        }
      } 
      document.getElementById("availability_desktop").innerHTML=dataDisplay.value;
      document.getElementById("header_headline").innerHTML=dataHeader.value;
      document.getElementById("header_intro").innerHTML=dataHeader_intro.value;
      document.getElementById("button_label_1").innerHTML=dataButton_1.value;
      document.getElementById("button_label_2").innerHTML=dataButton_2.value;
      var background_color = document.getElementById("db_background");
background_color.style.backgroundColor = dataDbBackground.value;
      console.log(dataDisplay.value);
  });
}

function displayDataPage1() {
    var datapage_1_title = document.getElementById("page_1_title");
    var datarole_1 = document.getElementById("role_1");
    var datarole_2 = document.getElementById("role_2");
    var datarole_3 = document.getElementById("role_3");
    var datapage_1_description = document.getElementById("page_1_description");
    var databackground_color = document.getElementById("background_color");
    var publicDataRef = database.ref('publicDataPage1');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("title")) {
                datapage_1_title.value = data.title;
            } else {
                datapage_1_title.value = "";
            }
  
            if (data.hasOwnProperty("role_1")) {
                datarole_1.value = data.role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("role_2")) {
                datarole_2.value = data.role_2;
            } else {
                datarole_2.value = "";
            }
            if (data.hasOwnProperty("role_3")) {
                datarole_3.value = data.role_3;
            } else {
                datarole_3.value = "";
            }
            if (data.hasOwnProperty("page_1_description")) {
                datapage_1_description.value = data.page_1_description;
            } else {
                datapage_1_description.value = "";
            }
            if (data.hasOwnProperty("background_color")) {
                databackground_color.value = data.background_color;
            } else {
                databackground_color.value = "";
            }
        } 
        console.log(databackground_color.value);
    document.getElementById("page_1_title").innerHTML=datapage_1_title.value;
    document.getElementById("role_1").innerHTML=datarole_1.value;
    document.getElementById("role_2").innerHTML=datarole_2.value;
    document.getElementById("role_3").innerHTML=datarole_3.value;
    document.getElementById("page_1_description").innerHTML=datapage_1_description.value;
    var background_color = document.getElementById("background_color");
background_color.style.backgroundColor = databackground_color.value;
   
    });
}

function displayDataPage2() {
    var datapage_2_title = document.getElementById("page_2_title");
    var datarole_1 = document.getElementById("page_2_role_1");
    var datarole_2 = document.getElementById("page_2_role_2");
    var datapage_2_description = document.getElementById("page_2_description");
    var databackground_color = document.getElementById("background_color_page_2");
    var publicDataRef = database.ref('publicDataPage2');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("title")) {
                datapage_2_title.value = data.title;
            } else {
                datapage_2_title.value = "";
            }
  
            if (data.hasOwnProperty("page_2_role_1")) {
                datarole_1.value = data.page_2_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_2_role_1")) {
                datarole_2.value = data.page_2_role_2;
            } else {
                datarole_2.value = "";
            }
           
            if (data.hasOwnProperty("page_2_description")) {
                datapage_2_description.value = data.page_2_description;
            } else {
                datapage_2_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_2")) {
                databackground_color.value = data.background_color_page_2;
            } else {
                databackground_color.value = "";
            }
        } 

        document.getElementById("page_2_title").innerHTML = datapage_2_title.value;
        document.getElementById("page_2_role_1").innerHTML = datarole_1.value;
        document.getElementById("page_2_role_2").innerHTML = datarole_2.value;
        document.getElementById("page_2_description").innerHTML = datapage_2_description.value;
        var background_color = document.getElementById("background_color_page_2");
background_color.style.backgroundColor = databackground_color.value;
        
     
   
    });
}

//page 3

function displayDataPage3() {
    var datapage_3_title = document.getElementById("page_3_title");
    var datarole_1 = document.getElementById("page_3_role_1");
    var datarole_2 = document.getElementById("page_3_role_2");
    var datapage_3_description = document.getElementById("page_3_description");
    var databackground_color = document.getElementById("background_color_page_3");
    var publicDataRef = database.ref('publicDataPage3');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("page_3_title")) {
                datapage_3_title.value = data.page_3_title;
            } else {
                datapage_3_title.value = "";
            }
  
            if (data.hasOwnProperty("page_3_role_1")) {
                datarole_1.value = data.page_3_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_3_role_1")) {
                datarole_2.value = data.page_3_role_2;
            } else {
                datarole_2.value = "";
            }
           
            if (data.hasOwnProperty("page_3_description")) {
                datapage_3_description.value = data.page_3_description;
            } else {
                datapage_3_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_3")) {
                databackground_color.value = data.background_color_page_3;
            } else {
                databackground_color.value = "";
            }
        } 

        document.getElementById("page_3_title").innerHTML = datapage_3_title.value;
        document.getElementById("page_3_role_1").innerHTML = datarole_1.value;
        document.getElementById("page_3_role_2").innerHTML = datarole_2.value;
        document.getElementById("page_3_description").innerHTML = datapage_3_description.value;
        var background_color = document.getElementById("background_color_page_3");
        background_color.style.backgroundColor = databackground_color.value;
     
     
   
    });
};

function displayDatapage4() {
    var datapage_4_title = document.getElementById("page_4_title");
    var datarole_1 = document.getElementById("page_4_role_1");
    var datarole_2 = document.getElementById("page_4_role_2");
    var datarole_3 = document.getElementById("page_4_role_3");
    var datapage_4_description = document.getElementById("page_4_description");
    var databackground_color = document.getElementById("background_color_page_4");
    var publicDataRef = database.ref('publicDatapage4');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("page_4_title")) {
                datapage_4_title.value = data.page_4_title;
            } else {
                datapage_4_title.value = "";
            }
  
            if (data.hasOwnProperty("page_4_role_1")) {
                datarole_1.value = data.page_4_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_4_role_1")) {
                datarole_2.value = data.page_4_role_2;
            } else {
                datarole_2.value = "";
            }
            if (data.hasOwnProperty("page_4_role_3")) {
                datarole_3.value = data.page_4_role_3;
            } else {
                datarole_3.value = "";
            }
           
            if (data.hasOwnProperty("page_4_description")) {
                datapage_4_description.value = data.page_4_description;
            } else {
                datapage_4_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_4")) {
                databackground_color.value = data.background_color_page_4;
            } else {
                databackground_color.value = "";
            }
        } 

        document.getElementById("page_4_title").innerHTML = datapage_4_title.value;
        document.getElementById("page_4_role_1").innerHTML = datarole_1.value;
        document.getElementById("page_4_role_2").innerHTML = datarole_2.value;
        document.getElementById("page_4_role_3").innerHTML = datarole_3.value;
        document.getElementById("page_4_description").innerHTML = datapage_4_description.value;
        var background_color = document.getElementById("background_color_page_4");
        background_color.style.backgroundColor = databackground_color.value;
     
     
   
    });
    
};

function displayDatapage5() {
    var datapage_5_title = document.getElementById("page_5_title");
    var datarole_1 = document.getElementById("page_5_role_1");
    var datarole_2 = document.getElementById("page_5_role_2");
    var datapage_5_description = document.getElementById("page_5_description");
    var databackground_color = document.getElementById("background_color_page_5");
    var publicDataRef = database.ref('publicDatapage5');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("page_5_title")) {
                datapage_5_title.value = data.page_5_title;
            } else {
                datapage_5_title.value = "";
            }
  
            if (data.hasOwnProperty("page_5_role_1")) {
                datarole_1.value = data.page_5_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_5_role_1")) {
                datarole_2.value = data.page_5_role_2;
            } else {
                datarole_2.value = "";
            }
           
            if (data.hasOwnProperty("page_5_description")) {
                datapage_5_description.value = data.page_5_description;
            } else {
                datapage_5_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_5")) {
                databackground_color.value = data.background_color_page_5;
            } else {
                databackground_color.value = "";
            }
        } 

        document.getElementById("page_5_title").innerHTML = datapage_5_title.value;
        document.getElementById("page_5_role_1").innerHTML = datarole_1.value;
        document.getElementById("page_5_role_2").innerHTML = datarole_2.value;
        document.getElementById("page_5_description").innerHTML = datapage_5_description.value;
        var background_color = document.getElementById("background_color_page_5");
        background_color.style.backgroundColor = databackground_color.value;
     
     
   
    });
};

function displayDatapage8() {
    var data_title_1, data_description_1 ;  
    //section 2
    //comment 1
    var data_cm_comment_1, data_cm_title_1, data_cm_name_1;
    

    //comment 2
    var data_cm_comment_2, data_cm_title_2, data_cm_name_2; 


    //comment 3
    var data_cm_comment_3, data_cm_title_3, data_cm_name_3; 
    //comment 4
    var data_cm_comment_4, data_cm_title_4, data_cm_name_4;  
    //comment 5
    var data_cm_comment_5, data_cm_title_5, data_cm_name_5; 
    //comment 6
    var data_cm_comment_6, data_cm_title_6, data_cm_name_6;  
    //comment 7
    var data_cm_comment_7, data_cm_title_7, data_cm_name_7; 
    //comment 8
    var data_cm_comment_8, data_cm_title_8, data_cm_name_8;
    //comment 9
    var data_cm_comment_9, data_cm_title_9, data_cm_name_9;
    //comment 10
    var data_cm_comment_10, data_cm_title_10, data_cm_name_10
    //comment 11
    var data_cm_comment_11, data_cm_title_11, data_cm_name_11;
    //section 3

    var data_cm_heading_1;

    //section 4
    var data_sr_1_title, data_sr_description_1, data_sr_button_1, data_sr_pr_1;
    //section 5
    var data_sr_2_title, data_sr_description_2, data_sr_button_2, data_sr_pr_2;
    //section 6
    var data_sr_3_title, data_sr_description_3;
    //section 7
    
    var data_cn_1_title, data_cn_email_1;

    var publicDataRef = database.ref('publicDatapage8');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();

        if (data) {
            // Section 1
            
            data_title_1 = data.title_1 || "";
            
            //data_title_1 = data.title_1 || "";
            data_description_1 = data.description_1 || "";
            
            // Section 2 - Comment 1
            data_cm_comment_1 = data.cm_comment_1 || "";
            
            data_cm_title_1 = data.cm_title_1 || "";
            data_cm_name_1 = data.cm_name_1 || "";

             // Section 2 - Comment 2
             data_cm_comment_2 = data.cm_comment_2 || "";
             data_cm_title_2 = data.cm_title_2 || "";
             data_cm_name_2 = data.cm_name_2 || "";
              // Section 2 - Comment 3
            data_cm_comment_3 = data.cm_comment_3 || "";
            data_cm_title_3 = data.cm_title_3 || "";
            data_cm_name_3 = data.cm_name_3 || "";
             // Section 2 - Comment 4
             data_cm_comment_4 = data.cm_comment_4 || "";
             data_cm_title_4 = data.cm_title_4 || "";
             data_cm_name_4 = data.cm_name_4 || "";
              // Section 2 - Comment 5
            data_cm_comment_5 = data.cm_comment_5 || "";
            data_cm_title_5 = data.cm_title_5 || "";
            data_cm_name_5 = data.cm_name_5 || "";
             // Section 2 - Comment 6
             data_cm_comment_6 = data.cm_comment_6 || "";
             data_cm_title_6 = data.cm_title_6 || "";
             data_cm_name_6 = data.cm_name_6 || "";
              // Section 2 - Comment 7
            data_cm_comment_7 = data.cm_comment_7 || "";
            data_cm_title_7 = data.cm_title_7 || "";
            data_cm_name_7 = data.cm_name_7 || "";
             // Section 2 - Comment 8
             data_cm_comment_8 = data.cm_comment_8 || "";
             data_cm_title_8 = data.cm_title_8 || "";
             data_cm_name_8 = data.cm_name_8 || "";
              // Section 2 - Comment 9
            data_cm_comment_9 = data.cm_comment_9 || "";
            data_cm_title_9 = data.cm_title_9 || "";
            data_cm_name_9 = data.cm_name_9 || "";
             // Section 2 - Comment 10
             data_cm_comment_10 = data.cm_comment_10 || "";
             data_cm_title_10 = data.cm_title_10 || "";
             data_cm_name_10 = data.cm_name_10 || "";
              // Section 2 - Comment 11
            data_cm_comment_11 = data.cm_comment_11|| "";
            data_cm_title_11 = data.cm_title_11|| "";
            data_cm_name_11 = data.cm_name_11|| "";


            // Continue similar assignments for Section 2 - Comment 2 to Comment 11

            // Section 3
            data_cm_heading_1 = data.cm_heading_1 || "";

            // Section 4
            data_sr_1_title = data.sr_1_title || "";
            data_sr_description_1 = data.sr_description_1 || "";
            data_sr_button_1 = data.sr_button_1 || "";
            data_sr_pr_1 = data.sr_pr_1 || "";
            // Section 5
            data_sr_2_title = data.sr_2_title || "";
            data_sr_description_2 = data.sr_description_2 || "";
            data_sr_button_2 = data.sr_button_2 || "";
            data_sr_pr_2 = data.sr_pr_2 || "";
            // Section 6
            data_sr_3_title = data.sr_3_title || "";
            data_sr_description_3 = data.sr_description_3 || "";
            //section 7
            data_cn_1_title = data.cn_1_title || "";
            data_cn_email_1 = data.cn_email_1 || "";            

            
            
        } else {
            // Handle the case when no data is found
            console.log("No data found in Firebase.");
        }
        document.getElementById("title_1").innerHTML = data_title_1;
        document.getElementById("description_1").innerHTML = data_description_1;
        console.log(data_cm_comment_1);
        document.getElementById("cm_comment_1").innerHTML = data_cm_comment_1;
        document.getElementById("cm_title_1").innerHTML = data_cm_title_1;
        document.getElementById("cm_name_1").innerHTML = data_cm_name_1;

        // comment 2
        document.getElementById("cm_comment_2").innerHTML = data_cm_comment_2;
        document.getElementById("cm_title_2").innerHTML = data_cm_title_2;
        document.getElementById("cm_name_2").innerHTML = data_cm_name_2;

        // comment 3
        document.getElementById("cm_comment_3").innerHTML = data_cm_comment_3;
        document.getElementById("cm_title_3").innerHTML = data_cm_title_3;
        document.getElementById("cm_name_3").innerHTML = data_cm_name_3;

        // comment 4
        document.getElementById("cm_comment_4").innerHTML = data_cm_comment_4;
        document.getElementById("cm_title_4").innerHTML = data_cm_title_4;
        document.getElementById("cm_name_4").innerHTML = data_cm_name_4;

        // comment 5
        document.getElementById("cm_comment_5").innerHTML = data_cm_comment_5;
        document.getElementById("cm_title_5").innerHTML = data_cm_title_5;
        document.getElementById("cm_name_5").innerHTML = data_cm_name_5;

        // comment 6
        document.getElementById("cm_comment_6").innerHTML = data_cm_comment_6;
        document.getElementById("cm_title_6").innerHTML = data_cm_title_6;
        document.getElementById("cm_name_6").innerHTML = data_cm_name_6;

        // comment 7
        document.getElementById("cm_comment_7").innerHTML = data_cm_comment_7;
        document.getElementById("cm_title_7").innerHTML = data_cm_title_7;
        document.getElementById("cm_name_7").innerHTML = data_cm_name_7;

        // comment 8
        document.getElementById("cm_comment_8").innerHTML = data_cm_comment_8;
        document.getElementById("cm_title_8").innerHTML = data_cm_title_8;
        document.getElementById("cm_name_8").innerHTML = data_cm_name_8;

        // comment 9
        document.getElementById("cm_comment_9").innerHTML = data_cm_comment_9;
        document.getElementById("cm_title_9").innerHTML = data_cm_title_9;
        document.getElementById("cm_name_9").innerHTML = data_cm_name_9;

        // comment 10
        document.getElementById("cm_comment_10").innerHTML = data_cm_comment_10;
        document.getElementById("cm_title_10").innerHTML = data_cm_title_10;
        document.getElementById("cm_name_10").innerHTML = data_cm_name_10;

        // comment 11
        document.getElementById("cm_comment_11").innerHTML = data_cm_comment_11;
        document.getElementById("cm_title_11").innerHTML = data_cm_title_11;
        document.getElementById("cm_name_11").innerHTML = data_cm_name_11;

        //Section 3
        document.getElementById("cm_heading_1").innerHTML = data_cm_heading_1;

        //section 4
        
        document.getElementById("sr_1_title").innerHTML = data_sr_1_title;
        document.getElementById("sr_description_1").innerHTML = data_sr_description_1;
        document.getElementById("sr_button_1").innerHTML = data_sr_button_1;
        document.getElementById("sr_pr_1").innerHTML = data_sr_pr_1;
        // section 5
        document.getElementById("sr_2_title").innerHTML = data_sr_2_title;
        document.getElementById("sr_description_2").innerHTML = data_sr_description_2;
        document.getElementById("sr_button_2").innerHTML = data_sr_button_2;
        document.getElementById("sr_pr_2").innerHTML = data_sr_pr_2;

        //section 6
        document.getElementById("sr_3_title").innerHTML = data_sr_3_title;
        document.getElementById("sr_description_3").innerHTML = data_sr_description_3;

        //section 7
        document.getElementById("cn_1_title").innerHTML = data_cn_1_title;
        document.getElementById("cn_email_1").innerHTML = data_cn_email_1;
    });

}

  
// Call the displayData function to show data in text boxes on page load
displayData();
displayDataPage1();
displayDataPage2();
displayDataPage3();
displayDatapage4();
displayDatapage5();
displayDatapage8();
