

function pop() {
    var aler = document.querySelector('#alert')
    $('#alert').css({'display': 'flex', 'width': '200px', 'height': '150px'})
    
}

// function pop() {
//     $('#aSec').append(`<div id="#alert"><h5>Please select a song</h5></div>`)
// }

function closing() {
    $('#alert').css({'display': 'none'});
}

function iconCheck() {
    if(audio.paused) {
        $('#play').html(`<i class="far ic fa-play-circle"></i>`);
        $('#play2').html(`<i class="far ic2 fa-play-circle"></i>`);
    }else{
        $('#play').html(`<i class="far ic fa-pause-circle"></i>`);
        $('#play2').html(`<i class="far ic2 fa-pause-circle"></i>`);
    }

}

$('#playing').html(musicArr[0].substring(musicArr[0].lastIndexOf('/')+1))
$('#playing2').html(musicArr[0].substring(musicArr[0].lastIndexOf('/')+1))


