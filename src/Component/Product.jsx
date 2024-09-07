import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const dispatch = useDispatch();
  
  const products = [
    { id: 1, name: "I Phone 13", price:  75000,  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERMQDg8PEA8SEA4PDRAPEA8PEBAPFRIWFhUSFRUYHSgiGBolGxUTITEhJSkrLjEuFx8zODMtNygtLisBCgoKDg0OFxAQGS0lHR0tLS0tLSsrLy0tLSstMC0vLS0tMistNTcrLS0tKy0tLS0tKzUtLS0tLSstLS0wLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABJEAACAQICBAcLCAgGAwAAAAAAAQIDBAURBhIhMRNBUWFxc7MiMjVCcoGRk7GywQcUFRclUlXRI0NigpSh4fAzhZKjwtIWJFb/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAIxEBAQACAgICAgMBAAAAAAAAAAECEQMxEiEEMkFRIiNhE//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWbitq5JLOT3ciXKy8RV7VydR8jjBcqWUc/ayKthju6UXN/GP8AiVstuWxqCz5M9mfpHzhPapVX0Sf5ny9pHidW9ualSvLN601ThLNxpxUso04rctnp2nRPkdxmtnWtaspTpU1SlS1m3wblrJwT5NiaXFtFnrbXC43Lx069GuuOVVdMpF5L9uf+uRHOqkm3LLLcs9/NkX7Wpsa8/QVa3jn4QOmelqsVCnTVavd1nqW1vTnJznL4JbM3xELbvSCotedxY2ueTVN8NcThzSaern0bCzg8VXxy8qz2u1trelRz8Xhm5ykufLZ0M2XHbnUpqMe+qPVXk8b/AL5Sd6VxwmTWadxjkpOMMRtJJPLW+bzyfRtMbE8bxK1koXWO4ZRm0pKE6U1LV4nlnu3+g3PC7dKK2Glaa/JS8Qu5XdK7VF1I01UhOk5pShBQTi1JbGox2Zb8+UiVOfHJPUYv/l93/wDSYV6qoX7DSHEriThbY5hteok5akKU9bVW9pZ7SEfyF1fxCl6if/YmtEPkodhdQuqt2qvBKpwcKdJwzlODhnKTb2JSezoJZ443fuJW2eOVN2J2aa3p29TNfzLtSppBR7uFzh91ltlTlCpRlJckW+5T6ciWuk6U1OPE+6XKuMlYSTSa3NJoiVreLFj6D6ZxxDhKNalK2vqD1bm3nvi+Vcq5Hxm2HKsX/wDXx7Da1NZSuqdzbXDXjQppTj59uXQdVLxy5zVAAFQAAAAAAAAAAAAAAAAhb79Z1kf+JNELffrPLz9CiyK14fs5ZpP8nNOrXlXoVZ2/CSc6kY01Vg5N5uUVrRcW3te1roM7CcPtsIt51JykqaanXrT21Ks90YpLpyUVyvlbNvrOetHV1XDN8InnrZZbGnnymm/Kvh1WvZJ0VKXA1o1qkIptypqE4tpLflrJ9CZXt03GYy5Se2NZfKzbTqKFShWpU28uFlKE9XnnFbl0ZnSbKalm4tNOOaa2po+W7alwmrCEXUrSahShTS7rzLe+c+jtCreVK1p0pvWlSoUaUnvTlGCi8ubNMtlJGXHyZZS7a/ol4XxXyMO7ORL47LO4px5IZ+dv+hE6I+F8V8jDuzkSONSyu49XH2srk14WxWUdiM+CMCyeaRIxIhm9yLc4l08kiVJULiVHNFrBqmcHF74vLzP+2SF7DYQ2HS1K7jxTTXn4iJ217iF0r8L4L1l/2UTqhyzSzwvgvWX/AGUTqZeOPk+wACWYAAAAAAAAAAAAAAAARdWGcp+W/diShGJ5yn1kl6EkRWnH2j6lm+LIsVLGb5P5kxkGirp8q1mlo93Tko04OXfyjFKUul8fnJ2haqnDVj5+cycimpuYRa55ocvtfFerw7s5EhpZJU61KpJ6sdRqUnxZP+pgaGeF8V6vDuzkR3yi4g61zG2h3lFZza8apLJtdCWXnbIyuov8fG5Zai9V0xqz7izhqrdwk1nJ86W5FdCpeVNs7ip0KTSMbBbFJLYbTaUEjDytepeLDCe57YNvRuFur1f9TJO3v7mHfNVF+0tvpMynTLypIvNuXkywv4KOIxqrJrUn918fQyIxHuJxnySTJC5s09q2PiyMC7bnBqXfx3865S22PjPwiNK3ni+CNbnO+a9TE6ochxqtniOByfFLEE/3aUTrxrHByfYABLMAAAAAAAAAAAAAAAAIulvqdbP4EoRdJbamez9LP4EVpx9rgB6VbPCiruZcLdZ7H0Ac90JX2vivV4d2cjVqj4S6q1HvlVnL0yZtOhO3FsV6vDuzkazGGrWmv25e0pydOr4V1la2jDY5JE5bmuWNXIm7asYz09DP+UStNl6LMOnULqmaSuLLBkSZDX8tWafFJ6r85nzqkDjdxu8pe0Wpxw9ILFX9o4Svu1sS/nQidoOJYg28UwzJZ/p79Jcr4BHbTbHp5vP96AAsxAAAAAAAAAAAAAAAACPXfT6x+7EkCPXfT6x+7Eir8fb0HoKtlE5ZLMxbirmmmjJqrNGBXexkVphI0zQRfa2K9XhvZyIvFLNxuqscv1kvRmSWhVVQxPF5y3Ro4dJ+alIyq9J1avCSWTmtZ+nL2ZEcnS3x7rKoynTaMujcZEp8x2bjFr2HIc9elhnGRQu0ZKuEQE4yhylDvmiPJr4Y1N17rnNbxK61pxjn4y9pbucQZg4ZnWuqUHulUin0Nlsbuq8kmONSN5RccQwST31K+Iz83BRS9h2U5lppTUcWwOMVlFTv1FciVGGSOmnXHz/Jd5WgAJZgAAAAAAAAAAAAAAABHrvp9Y/diSBHrvp9Y/diRV+PtUACrZ4WqtNZPYi6UVdwI5Vhk8sRxWC8f6Lj+6qc38EbrUt8o05cj1X0Nf0NFwzwviP+X9lI6VGnrU2uPLNdK2kZe043Xv8A1QqOwt1Lcy6LzSfMVSiZ3FtjnYg7qyT4iFu8ONuqwI+4pGWWLs4uWtIurFovaI2ud7S5pa3oWfwJe/pFeg1trXbnxQpyfnez4jj+0afIy/rte6deF8E6zEOygdKObad+F8E6zEOygdJO14OQAAqAAAAAAAAAAAAAAAAEcu+n1j92JIkd40+sfuxIrTj7VAAq1CiruZWUVdzCXKcLh9p4pL7rwv0OlM6TYS7lGg4BS1r/ABvlVPDJr92En7Mzd8IqZxXQRe1Z1WRCOrJx4t8ehl1ldalrLZsku9fwMThstktjW9Mi+l8bt7URg3Bk1KyI67rpGOVdfFjUTicskyY0ApJRqyffycH+5ty/voIelaSup5LNUov9JPi6Fzkzg0+Cu1BbIzg4JdCzXsJ4p72n5ec8fCIrT3wvgfWYh2UDpBzfT7wvgfWYh2UDpB1PKoAAqAAAAAAAAAAAAAAAAEd41TrH7sSRI7xp+W/diRWnH29ABVsFFXcVlFXcwND0EgpYtjEXulSw+L6HSmidwaThnTl30JSi/MyF0A8MYv5GG9nMn8YpcDcKou8q7/LW/wCAyVw7sTVNivbxmu6XQ1sa85YtqmaMuLCvVRdbBc+9rSXTFMtQ0dhnnVnOp+z3q/ltJoMjwx/TT/tnrW2K6MYR1YRUYrckska3fS1LijNcVWHozNnqms4lDWr0Yre61P3kKjD8sLT7wvgfWYh2UDpBzjT7wvgfWYh2UDo5owoAAqAAAAAAAAAAAAAAAAEbn3dRck/bCL+JJEbex4OfCfq5pKb+5NbFJ8zWSz4slykVfjvtUDxMFW+npRU3MqPJBLRdAtmMYsnvdPDmlzKEkze8UslWpuG599B8kluObaQcPhmIxxShRnXoTpfN8QoU/wDEdHW1lUguOUXt6Fls2tbZh/yh4VXgpwxG2gn4teoqE1zONTJlmN9V7hdw03CaylF6sk+JomoSNaxbSHDaj4WlieHqqt6+dUEprkfdb+cx7LTiwy7q+tE+PO4pfmU6XusvbcEw2a6tNcO/EbH+Jo/meS01w78Rsv4mj+ZKiauZ5Ih8Ho8Ndup4lFPbxOctiXozZE3umVlUap07+zTlsc5XNGMIrlbzJCnpnhNlR8I2s0s5S4KpGvUnPjerTzZEm6vbMYjtPHnjOBx4+ExB/wC1A6Qcy0Sp18WxL6Xr0Z29nQpOhhtKqsqks3nKrJcTb5OLJbd76aaMKAAIAAAAAAAAAAAAAAAAAABiSw2lxRceaE5016ItI8+joctT1tX8zMAT5X9sP6Ohy1PW1PzH0dDlqetqfmZgGjyv7R9XB6UllJTa56tX8yMr6C4dUetVsqNWX3qqdSXplmzYwDyv7av9XmFfh1r6qI+rzCvw619VE2gA3Wr/AFeYV+HWvqoj6vMK/DrX1UTaADdav9XmFfh1r6qJk2WhWHUZa9GwtoTW6UaccyfAN15GKSySSS2JJZJHoAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" },
    { id: 2, name: "Wireless Headphones", price: 3000, image: "data:image/jpeg;base64,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" },
    { id: 3, name: "Air Purifier", price:  15000,  image: "data:image/jpeg;base64,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" },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} added to cart successfully!`);
  };

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-full h-56 md:h-72 lg:h-[350px]">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg font-semibold text-orange-600 mb-2">Rs {product.price}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ToastContainer to display toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Product;
