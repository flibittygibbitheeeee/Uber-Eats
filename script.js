
// HEADER TEXTBOX ANIMATION

$(document).ready(function(){
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');

        // Add 'header-scrolled' class to the header when scrolled beyond 50 pixels
        if (window.scrollY > 500) {
            $("#header_nav").css('background-color','white');
                // $(".textboxs").css('transform','translateX(0%)');
            $('.textboxs').css({
                transform: 'translateX(0%)',
                opacity: 100
            });
            // $("#header_container").css('opacity','1');
            header.classList.add('header-scrolled');
        }
        else {
            $("#header_nav").css('background-color','transparent');
            // $(".textboxs").css('transform','translateX(-300%)');
            $('.textboxs').css({
                transform: 'translateX(-300%)',
                opacity: 0
            });
        
        // $("#header_container").css('opacity','1');
        header.classList.remove('header-scrolled');        
        }
    });

    $("#delivery_address").on("focus", function(){
        // alert("Adasd");
        $(".delivery").css('box-shadow', '0px 2px');
    });

    $("#delivery_address").on("focusout", function(){
        // alert("Adasd");
        $(".delivery").css('box-shadow', '0px 0px');
    });

    function show_textbox(){
        $(".textboxs").css('display','none');
    }
});

// SELECTED DROPDOWN

document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.select-btn');
    var optionsList = document.querySelector('.options');
    var optionItems = document.querySelectorAll('.option');
    var sBtnText = document.querySelector('.sBtn-text');

    dropdownButton.addEventListener('click', function() {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    });

    optionItems.forEach(function(option) {
        option.addEventListener('click', function() {
            var selectedText = option.innerHTML;
            sBtnText.innerHTML = selectedText;
            optionsList.style.display = 'none';
        });
    });
});

// SCHEDULE FOR LATER DATE OPTIONS

document.addEventListener('DOMContentLoaded', function() {
    var dateSelect = document.getElementById('date');
    var today = new Date();

    for (var i = 0; i < 7; i++) {
      var date = new Date(today);
      date.setDate(today.getDate() + i);
      var optionText = formatDate(date);

      var option = document.createElement('option');
      option.value = optionText;
      option.textContent = optionText;
      dateSelect.appendChild(option);
    }

    function formatDate(date) {
      var options = { month: '2-digit', day: '2-digit', year: 'numeric' };
      var formattedDate = date.toLocaleDateString('en-US', options);
      var dayLabel = (date.getDate() === today.getDate()) ? 'Today' : ((i === 1) ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'long' }));
      return formattedDate + ' - ' + dayLabel;
    }
});

// SCHEDULE FOR LATER TIME OPTIONS

document.addEventListener('DOMContentLoaded', function() {
    var timeSelect = document.getElementById('time');

    var startTime = new Date();
    startTime.setHours(4, 45, 0, 0); // Set the initial start time

    var endTime = new Date();
    endTime.setHours(23, 0, 0, 0); // Set the end time

    var interval = 30; // Set the interval in minutes

    while (startTime < endTime) {
      var optionText = formatTime(startTime);

      var option = document.createElement('option');
      option.value = optionText;
      option.textContent = optionText;
      timeSelect.appendChild(option);

      startTime.setMinutes(startTime.getMinutes() + interval); // Increment the start time by the interval
    }

    function formatTime(time) {
      var options = { hour: 'numeric', minute: '2-digit' };
      var formattedTime = time.toLocaleTimeString('en-US', options);
      var endTime = new Date(time.getTime() + interval * 60000);
      var formattedEndTime = endTime.toLocaleTimeString('en-US', options);
      return formattedTime + ' - ' + formattedEndTime;
    }
});