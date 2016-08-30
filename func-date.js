function form_date(val){
	var d = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
	var m = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
	var dt = new Date(val).getDate();
	var d_ = d[new Date(val).getDay()];
	var m_ = m[new Date(val).getMonth()];
	var y = new Date(val).getYear();
	var y_ = (y<1000) ? y + 1900 : y;
	var res = d_ + ", " + dt + " " + m_ + " " + y_;
	return res;
}