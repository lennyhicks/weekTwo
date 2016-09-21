            $(document).ready(function() {
                $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Groningen&units=metric&appid=9334f947893792dcb9b2e2c05ae23eb0", function(data) {
                    $('.weather').html(Math.round(data.main.temp) + ' degrees Celcius');
                });

            });