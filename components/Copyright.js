import Link from "next/link"
import Image from "next/image"


const Copyright = () => {
    return (
      <div className="copyright">
        <small className="copyright-str">© 2023 VtuberRealTime&nbsp;&nbsp;</small>
        <Link href=""><Image src="/Twitter_icon.png" height="20" width="20"/></Link>
      </div>
    )
}


export default Copyright
