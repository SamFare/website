import React from "react";

import css from "./Paragraph.css"

export default class Paragraph extends React.Component{
  render(){
    return (
        <div className={css.paragraphText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nec neque quis finibus. Morbi egestas odio eget porttitor accumsan. Curabitur at purus at elit vestibulum sodales. Nam dignissim, arcu eget venenatis scelerisque, libero diam commodo sem, maximus convallis risus tortor et tortor. Integer sit amet enim sit amet urna elementum pellentesque. Fusce placerat nisl ac justo sagittis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut id metus orci. Ut eget est eleifend, bibendum leo quis, vehicula lacus. Vestibulum feugiat et augue eu tempus
        </div>
    );
  }
}
