<html>

<body>
<style>
table, th, td{
border: 1px solid black;
}


</style>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
	$size = intval($_POST['size']);

	if ($size > 0) {
		echo '<table>';
		echo '<tr><th></th>';
		for ($i = 1; $i <= $size; $i++){
			echo "<th>$i</th>";
		}
		echo '</tr>';

		for ($i = 1; $i <= $size; $i++){
			echo "<tr><th>$i</th>";
			for ($j = 1; $j <= $size; $j++){
				$mult = $i * $j;
				echo "<td>$mult</td>";
			}
			echo '</tr>';
		}
		echo '</table>';
	}

}

?>
</body>
</html>
