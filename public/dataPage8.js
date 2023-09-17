function updateDatapage8() {
    var title_1  = document.getElementById("title_1").value;
    var description_1 = document.getElementById("description_1").value;
    //section 2
    //comment 1
    var cm_comment_1 = document.getElementById("cm_comment_1").value;
    var cm_title_1 = document.getElementById("cm_title_1").value;
    var cm_name_1 = document.getElementById("cm_name_1").value;

    //comment 2
    var cm_comment_2 = document.getElementById("cm_comment_2").value;
    var cm_title_2 = document.getElementById("cm_title_2").value;
    var cm_name_2 = document.getElementById("cm_name_2").value;

    //comment 3
    var cm_comment_3 = document.getElementById("cm_comment_3").value;
    var cm_title_3 = document.getElementById("cm_title_3").value;
    var cm_name_3 = document.getElementById("cm_name_3").value;
    //comment 4
    var cm_comment_4 = document.getElementById("cm_comment_4").value;
    var cm_title_4 = document.getElementById("cm_title_4").value;
    var cm_name_4 = document.getElementById("cm_name_4").value;
    //comment 5
    var cm_comment_5 = document.getElementById("cm_comment_5").value;
    var cm_title_5 = document.getElementById("cm_title_5").value;
    var cm_name_5 = document.getElementById("cm_name_5").value;
    //comment 6
    var cm_comment_6 = document.getElementById("cm_comment_6").value;
    var cm_title_6 = document.getElementById("cm_title_6").value;
    var cm_name_6 = document.getElementById("cm_name_6").value;
    //comment 7
    var cm_comment_7 = document.getElementById("cm_comment_7").value;
    var cm_title_7 = document.getElementById("cm_title_7").value;
    var cm_name_7 = document.getElementById("cm_name_7").value;
    //comment 8
    var cm_comment_8 = document.getElementById("cm_comment_8").value;
    var cm_title_8 = document.getElementById("cm_title_8").value;
    var cm_name_8 = document.getElementById("cm_name_8").value;
    //comment 9
    var cm_comment_9 = document.getElementById("cm_comment_9").value;
    var cm_title_9 = document.getElementById("cm_title_9").value;
    var cm_name_9 = document.getElementById("cm_name_9").value;
    //comment 10
    var cm_comment_10 = document.getElementById("cm_comment_10").value;
    var cm_title_10 = document.getElementById("cm_title_10").value;
    var cm_name_10 = document.getElementById("cm_name_10").value;
    //comment 11
    var cm_comment_11 = document.getElementById("cm_comment_11").value;
    var cm_title_11 = document.getElementById("cm_title_11").value;
    var cm_name_11 = document.getElementById("cm_name_11").value;
    //section 3

    var cm_heading_1 = document.getElementById("cm_heading_1").value;

    //section 4
    var sr_1_title = document.getElementById("sr_1_title").value;
    var sr_description_1 = document.getElementById("sr_description_1").value;
    var sr_button_1 = document.getElementById("sr_button_1").value;
    var sr_pr_1 = document.getElementById("sr_pr_1").value;

    //section 5
    var sr_2_title = document.getElementById("sr_2_title").value;
    var sr_description_2 = document.getElementById("sr_description_2").value;
    var sr_button_2 = document.getElementById("sr_button_2").value;
    var sr_pr_2 = document.getElementById("sr_pr_2").value;

    //section 6
    var sr_3_title = document.getElementById("sr_3_title").value;
    var sr_description_3 = document.getElementById("sr_description_3").value;
    
    //section 7
    
    var cn_1_title = document.getElementById("cn_1_title").value;
    var cn_email_1 = document.getElementById("cn_email_1").value;


    var publicDataRef = database.ref('publicDatapage8');
    publicDataRef.set({
        title_1: title_1,
        description_1: description_1,
        //section 2
        // comment 1
        cm_comment_1 : cm_comment_1,
        cm_title_1 : cm_title_1,
        cm_name_1 : cm_name_1,
         // comment 2
         cm_comment_2 : cm_comment_2,
         cm_title_2 : cm_title_2,
         cm_name_2 : cm_name_2,
          // comment 3
        cm_comment_3 : cm_comment_3,
        cm_title_3 : cm_title_3,
        cm_name_3 : cm_name_3,
         // comment 4
         cm_comment_4 : cm_comment_4,
         cm_title_4 : cm_title_4,
         cm_name_4 : cm_name_4,
          // comment 5
        cm_comment_5 : cm_comment_5,
        cm_title_5 : cm_title_5,
        cm_name_5 : cm_name_5,
         // comment 6
         cm_comment_6 : cm_comment_6,
         cm_title_6 : cm_title_6,
         cm_name_6 : cm_name_6,
          // comment 7
        cm_comment_7 : cm_comment_7,
        cm_title_7 : cm_title_7,
        cm_name_7 : cm_name_7,
         // comment 8
         cm_comment_8 : cm_comment_8,
         cm_title_8 : cm_title_8,
         cm_name_8 : cm_name_8,
          // comment 9
        cm_comment_9 : cm_comment_9,
        cm_title_9 : cm_title_9,
        cm_name_9 : cm_name_9,
         // comment 10
         cm_comment_10 : cm_comment_10,
         cm_title_10 : cm_title_10,
         cm_name_10 : cm_name_10,
          // comment 11
        cm_comment_11 : cm_comment_11,
        cm_title_11 : cm_title_11,
        cm_name_11 : cm_name_11,

        //section 3
        cm_heading_1 : cm_heading_1,
        //section 4
        //service 1
        sr_1_title: sr_1_title,
        sr_description_1: sr_description_1,
        sr_button_1: sr_button_1,
        sr_pr_1: sr_pr_1,
        //section 5
        //service 2
        sr_2_title: sr_2_title,
        sr_description_2: sr_description_2,
        sr_button_2: sr_button_2,
        sr_pr_2: sr_pr_2,
        //section 6
        //service 3
        sr_3_title: sr_3_title,
        sr_description_3: sr_description_3,
        
        //section 7
        cn_1_title : cn_1_title,
        cn_email_1 : cn_email_1


    }, function(error) {
        if (error) {
            console.error("Data could not be updated." + error);
        } else {
            console.log("Data updated successfully.");
            // You can add a success message or further actions here if needed
            displayDatapage8();
        }
    });
}

function displayDatapage8() {
    var data_title_1  = document.getElementById("title_1");
    var data_description_1 = document.getElementById("description_1");
    //section 2
    //comment 1
    var data_cm_comment_1 = document.getElementById("cm_comment_1");
    var data_cm_title_1 = document.getElementById("cm_title_1");
    var data_cm_name_1 = document.getElementById("cm_name_1");

    //comment 2
    var data_cm_comment_2 = document.getElementById("cm_comment_2");
    var data_cm_title_2 = document.getElementById("cm_title_2");
    var data_cm_name_2 = document.getElementById("cm_name_2");

    //comment 3
    var data_cm_comment_3 = document.getElementById("cm_comment_3");
    var data_cm_title_3 = document.getElementById("cm_title_3");
    var data_cm_name_3 = document.getElementById("cm_name_3");
    //comment 4
    var data_cm_comment_4 = document.getElementById("cm_comment_4");
    var data_cm_title_4 = document.getElementById("cm_title_4");
    var data_cm_name_4 = document.getElementById("cm_name_4");
    //comment 5
    var data_cm_comment_5 = document.getElementById("cm_comment_5");
    var data_cm_title_5 = document.getElementById("cm_title_5");
    var data_cm_name_5 = document.getElementById("cm_name_5");
    //comment 6
    var data_cm_comment_6 = document.getElementById("cm_comment_6");
    var data_cm_title_6 = document.getElementById("cm_title_6");
    var data_cm_name_6 = document.getElementById("cm_name_6");
    //comment 7
    var data_cm_comment_7 = document.getElementById("cm_comment_7");
    var data_cm_title_7 = document.getElementById("cm_title_7");
    var data_cm_name_7 = document.getElementById("cm_name_7");
    //comment 8
    var data_cm_comment_8 = document.getElementById("cm_comment_8");
    var data_cm_title_8 = document.getElementById("cm_title_8");
    var data_cm_name_8 = document.getElementById("cm_name_8");
    //comment 9
    var data_cm_comment_9 = document.getElementById("cm_comment_9");
    var data_cm_title_9 = document.getElementById("cm_title_9");
    var data_cm_name_9 = document.getElementById("cm_name_9");
    //comment 10
    var data_cm_comment_10 = document.getElementById("cm_comment_10");
    var data_cm_title_10 = document.getElementById("cm_title_10");
    var data_cm_name_10 = document.getElementById("cm_name_10");
    //comment 11
    var data_cm_comment_11 = document.getElementById("cm_comment_11");
    var data_cm_title_11 = document.getElementById("cm_title_11");
    var data_cm_name_11 = document.getElementById("cm_name_11");
    //section 3

    var data_cm_heading_1 = document.getElementById("cm_heading_1");

    //section 4
    var data_sr_1_title = document.getElementById("sr_1_title");
    var data_sr_description_1 = document.getElementById("sr_description_1");
    var data_sr_button_1 = document.getElementById("sr_button_1");
    var data_sr_pr_1 = document.getElementById("sr_pr_1");

    //section 5
    var data_sr_2_title = document.getElementById("sr_2_title");
    var data_sr_description_2 = document.getElementById("sr_description_2");
    var data_sr_button_2 = document.getElementById("sr_button_2");
    var data_sr_pr_2 = document.getElementById("sr_pr_2");

    //section 6
    var data_sr_3_title = document.getElementById("sr_3_title");
    var data_sr_description_3 = document.getElementById("sr_description_3");
    
    //section 7
    
    var data_cn_1_title = document.getElementById("cn_1_title");
    var data_cn_email_1 = document.getElementById("cn_email_1");

    var publicDataRef = database.ref('publicDatapage8');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();

        if (data) {
            // Section 1
            if (data.hasOwnProperty("title_1")) {
                data_title_1.value = data.title_1;
            } else {
                data_title_1.value = "";
            }
            //data_title_1.value = data.title_1 || "";
            data_description_1.value = data.description_1 || "";

            // Section 2 - Comment 1
            data_cm_comment_1.value = data.cm_comment_1 || "";
            data_cm_title_1.value = data.cm_title_1 || "";
            data_cm_name_1.value = data.cm_name_1 || "";

             // Section 2 - Comment 2
             data_cm_comment_2.value = data.cm_comment_2 || "";
             data_cm_title_2.value = data.cm_title_2 || "";
             data_cm_name_2.value = data.cm_name_2 || "";
              // Section 2 - Comment 3
            data_cm_comment_3.value = data.cm_comment_3 || "";
            data_cm_title_3.value = data.cm_title_3 || "";
            data_cm_name_3.value = data.cm_name_3 || "";
             // Section 2 - Comment 4
             data_cm_comment_4.value = data.cm_comment_4 || "";
             data_cm_title_4.value = data.cm_title_4 || "";
             data_cm_name_4.value = data.cm_name_4 || "";
              // Section 2 - Comment 5
            data_cm_comment_5.value = data.cm_comment_5 || "";
            data_cm_title_5.value = data.cm_title_5 || "";
            data_cm_name_5.value = data.cm_name_5 || "";
             // Section 2 - Comment 6
             data_cm_comment_6.value = data.cm_comment_6 || "";
             data_cm_title_6.value = data.cm_title_6 || "";
             data_cm_name_6.value = data.cm_name_6 || "";
              // Section 2 - Comment 7
            data_cm_comment_7.value = data.cm_comment_7 || "";
            data_cm_title_7.value = data.cm_title_7 || "";
            data_cm_name_7.value = data.cm_name_7 || "";
             // Section 2 - Comment 8
             data_cm_comment_8.value = data.cm_comment_8 || "";
             data_cm_title_8.value = data.cm_title_8 || "";
             data_cm_name_8.value = data.cm_name_8 || "";
              // Section 2 - Comment 9
            data_cm_comment_9.value = data.cm_comment_9 || "";
            data_cm_title_9.value = data.cm_title_9 || "";
            data_cm_name_9.value = data.cm_name_9 || "";
             // Section 2 - Comment 10
             data_cm_comment_10.value = data.cm_comment_10 || "";
             data_cm_title_10.value = data.cm_title_10 || "";
             data_cm_name_10.value = data.cm_name_10 || "";
              // Section 2 - Comment 11
            data_cm_comment_11.value = data.cm_comment_11|| "";
            data_cm_title_11.value = data.cm_title_11|| "";
            data_cm_name_11.value = data.cm_name_11|| "";


            // Continue similar assignments for Section 2 - Comment 2 to Comment 11

            // Section 3
            data_cm_heading_1.value = data.cm_heading_1 || "";

            // Section 4
            data_sr_1_title.value = data.sr_1_title || "";
            data_sr_description_1.value = data.sr_description_1 || "";
            data_sr_button_1.value = data.sr_button_1 || "";
            data_sr_pr_1.value = data.sr_pr_1 || "";
            // Section 5
            data_sr_2_title.value = data.sr_2_title || "";
            data_sr_description_2.value = data.sr_description_2 || "";
            data_sr_button_2.value = data.sr_button_2 || "";
            data_sr_pr_2.value = data.sr_pr_2 || "";
            // Section 6
            data_sr_3_title.value = data.sr_3_title || "";
            data_sr_description_3.value = data.sr_description_3 || "";
            //section 7
            data_cn_1_title.value = data.cn_1_title || "";
            data_cn_email_1.value = data.cn_email_1 || "";            

            
            
        } else {
            // Handle the case when no data is found
            console.log("No data found in Firebase.");
        }
        
    });
}


