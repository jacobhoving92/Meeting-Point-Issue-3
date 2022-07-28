$(document).ready(
    function(){
        $('button:submit').attr('disabled',true);
        $('input:file').change(
            function(){
                if ($(this).val()){
                    $('button:submit').removeAttr('disabled');
                    console.log("test");
                    $('button:submit').attr('id', 'activeImgTwo');
                }
                else {
                    $('button:submit').attr('disabled',true);
                }
            });
    });

    function disableSubmit() {
        document.querySelector('activeImgTwo').removeAttribute('activeImgTwo');
    }

    updateList = function() {
        var input = document.getElementById('files');
        var output = document.getElementById('buttonImgOne');
      
        output.innerHTML = 'FILE TO BE DONATED:';
        for (var i = 0; i < input.files.length; ++i) {
          output.innerHTML += '<br>' + input.files.item(i).name;
        }
      }
