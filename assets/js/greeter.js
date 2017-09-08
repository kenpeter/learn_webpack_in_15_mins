// time lib
import moment from 'moment';

// greet to someone
function greet() {
	// time with format dddd
	var day = moment().format('dddd');
	// string + var
  console.log('Have a great ' + day + '!');
};

// export func, default 
export default greet;
