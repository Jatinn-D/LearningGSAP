import React from 'react'
import {motion,useScroll} from 'motion/react'

const App = () => {

  const scrollprogress = useScroll().scrollYProgress

  return (
    <div className='p-20 text-center text-white font-mono'>
      
      <motion.div 
      style={{
        scaleX:scrollprogress
      }}
      className='bg-amber-700 origin-left w-full h-3 fixed top-0 left-0'>

      </motion.div>
      
      <h1 className='text-4xl font-bold mb-8'>jatin</h1>
      
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum tenetur quas nihil reprehenderit natus placeat dignissimos ipsum. Ipsa placeat harum blanditiis recusandae, aperiam nulla odio dicta, voluptates ab in suscipit pariatur optio rem eveniet doloremque fuga id incidunt ex. Voluptatem, saepe quidem eaque optio eligendi quam sapiente alias provident, aliquid quos adipisci culpa voluptate nobis neque nulla dolorem repudiandae possimus. Dolores laboriosam quas fugiat quo itaque modi obcaecati ab iusto ad necessitatibus soluta, exercitationem qui optio, maiores libero dicta, quia eum inventore. Laboriosam saepe reiciendis, velit quod quibusdam distinctio voluptatem iusto recusandae accusamus obcaecati exercitationem eaque non voluptate eligendi? <br /> <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nobis minima autem doloremque omnis quasi blanditiis iure, sequi consequatur ipsa repudiandae praesentium, odit alias error amet fugiat labore officia voluptas aliquam delectus dolorem! Dolore ipsam perferendis reprehenderit non, corporis quasi ab animi, enim nam delectus qui fuga dolorem exercitationem aut deleniti possimus similique minima quisquam? Earum modi laboriosam a eveniet corrupti? Praesentium error nam repellat eligendi animi enim, mollitia nesciunt minus, autem voluptate expedita omnis eos veritatis tempora fugiat amet quo earum! Adipisci, officiis excepturi? Provident, sequi iusto fuga iste debitis unde accusantium dicta numquam nihil perspiciatis vel velit dolore soluta in nesciunt iure necessitatibus. Pariatur eveniet sit exercitationem omnis consectetur velit assumenda dolorem, quae mollitia quos, nesciunt labore minima facilis, repellendus officia veritatis ipsam magnam recusandae praesentium quod cum. Ullam, rem hic? Dicta praesentium ut molestiae eius vitae, vero, sunt provident repudiandae totam veniam fugiat, ad dignissimos quas et reiciendis sit voluptates nostrum iure modi ratione odit blanditiis tempore. Natus sapiente ut laborum nostrum corporis sit nobis officia totam deleniti, iusto aliquam similique molestias dicta explicabo maxime harum vel veniam velit est a, qui libero soluta! Amet quaerat in dolorum explicabo assumenda tenetur provident sint, quis laborum eaque vitae! <br /><br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa nam eos minus quidem assumenda nihil, vel in veniam incidunt accusamus vitae laudantium accusantium a sint, unde tenetur reiciendis ex error sed nesciunt ea, deleniti mollitia! Veniam velit praesentium totam repudiandae magni ipsum quos consectetur libero facere saepe ducimus mollitia voluptatem numquam qui assumenda, ratione esse molestiae. Temporibus inventore laborum aliquam quos, officia tenetur quia sit. Delectus maiores rerum tempora iusto harum nemo ipsam sapiente, doloremque asperiores accusamus facilis sint repellat deleniti natus molestiae aliquam quos hic corporis magni quasi est. Nulla, nostrum voluptatibus! Sapiente ducimus nihil aspernatur accusamus optio id quod aperiam ad, iste voluptatem ullam dolores aut in adipisci voluptas distinctio reiciendis quibusdam ut soluta officia magnam nobis inventore, velit repudiandae. Doloremque libero repellendus, ea ut blanditiis impedit magni maxime nihil facilis accusamus cupiditate assumenda ex harum esse! Minima, nihil facilis. Blanditiis quaerat quasi aut et nisi nostrum voluptas illum doloremque, quae explicabo nobis cupiditate earum culpa. Minima labore modi, iusto corrupti eum accusamus porro nulla delectus corporis enim magnam id excepturi magni commodi eius repellat vero nostrum perferendis itaque blanditiis illum tempora perspiciatis consequatur non. Atque fugiat quisquam quod aliquid cumque sapiente minus impedit molestias reprehenderit aspernatur! </p>
    </div>
  )
}

export default App