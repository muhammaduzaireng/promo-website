function updateDataPage4() {
    var page_4_title = document.getElementById("page_4_title").value;
    var page_4_role_1 = document.getElementById("page_4_role_1").value;
    var page_4_role_2 = document.getElementById("page_4_role_2").value;
    var page_4_role_3 = document.getElementById("page_4_role_3").value;
    var page_4_description = document.getElementById("page_4_description").value;
    var background_color_page_4 = document.getElementById("background_color_page_4").value;
    var publicDataRef = database.ref('publicDatapage4');
    publicDataRef.set({
        page_4_title: page_4_title,
        page_4_role_1: page_4_role_1,
        page_4_role_2 : page_4_role_2,
        page_4_role_3 : page_4_role_3,
        page_4_description: page_4_description,
        background_color_page_4: background_color_page_4

    }, function(error) {
        if (error) {
            console.error("Data could not be updated." + error);
        } else {
            console.log("Data updated successfully.");
            // You can add a success message or further actions here if needed
            displayDatapage4();
        }
    });
}

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

        console.log(datarole_2.value);
     
   
    });
}
