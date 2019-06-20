var selectedCharacteristic;

  // update the about text
function updateTextArea(characteristic) {
  var thisCharacteristic = characteristics[characteristic];
  $('#char-display-name').text(thisCharacteristic.displayName);
  $('#char-about').text(thisCharacteristic.about);
}

function updateChartMap(characteristic) {
		var thisMapCharacteristic = characteristics[characteristic];
		$('#chart-map').prop('src', thisMapCharacteristic.chartMap);
		//$('#chart-map').src = thisMapCharacteristic.chartMap;
}

Object.keys(characteristics).forEach(function (d) {
  d3.select('.char-select')
    .append('button')
    .attr('id', d)
    //.attr('class', 'btn btn-default btn-xs')
	.attr('class', 'btn btn-primary btn-md')
    .text(characteristics[d].displayName);
});

//  kick things off by downloading the csv

//d3.csv('data/historic_migration_selchars.csv', function (data) {
d3.csv('', function (data) {
  // change the selected characteristic when the user clicks a button
  $('.char-select>button').click(function () {
    selectedCharacteristic = $(this)[0].id;
    $(this).siblings().removeClass('active');
    $(this).addClass('active');


    updateTextArea(selectedCharacteristic);
	updateChartMap(selectedCharacteristic);

    // set url hash
    history.replaceState(undefined, undefined, '#' + selectedCharacteristic);
  });

  // select hashed characteristic
  if (Object.keys(characteristics).indexOf(window.location.hash.split('#')[1]) > -1) {
    $(window.location.hash).click();
  } else {
    $('#firstReview').click();
  }
});


// trigger download
// $('#csv-download').click(function () {

// });
