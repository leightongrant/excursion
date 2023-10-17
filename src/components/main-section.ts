import excursion from "/excursion.mp4";
import camp from "/camp.jpg";
import phone from "/phone.png";

export default function main() {
  return `
    <main id='main'>
        <section>
            <video autoplay loop controls>
                <source src='${excursion}' type="video/mp4" />            
            </video>
            <h2>Your personal travel guide</h2>
        </section>
        <section>
            <p class='intro'>Excursion remembers places you like, and recommends new points of interests around you.</p>
            <div>
                <img src='${camp}' />
            </div>
            <div>
                <img src='${phone}' />
            </div>
            <h2>Coming Soon for iPhone and Android</h2>
            <a href='#' class='download'>Download Excursion (Coming Soon!)</a>
        </section>
    </main>`;
}
