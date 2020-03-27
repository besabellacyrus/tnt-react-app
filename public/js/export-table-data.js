/*Export Table Init*/

"use strict";

$(document).ready(function () {
	console.log('running')
	$('#example').DataTable({
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		]
	});
});