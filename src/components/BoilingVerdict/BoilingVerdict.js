export default function BoilingVerdict({celsius}) {
	if(celsius >= 100) {
		return <p>Water IS boiling</p>
	} 

	return <p>Water is NOT boiling</p>
}