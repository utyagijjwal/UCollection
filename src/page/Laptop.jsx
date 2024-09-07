import React from 'react';
import Detail from '../Component/Detail';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Component/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Laptop = () => {
  const dispatch = useDispatch();

  const products = [
    {
      name: 'MacBook Pro',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8QEBAQEA8QEA8NDhAQFQ8QDw8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi0fHh0tLS0rKy0tLS0tLS0tLSsrLS0tKy0rLSstLS0rLS0tLS0tKy0tLSstNy0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABLEAABAwIDBAYFBQsMAwEAAAABAAIDBBESITEFQVFhBhMicYGRBzKhsdEUQlJywSMkM0NEYoKSssLwFRc0U1RzdIOis9LhFpPxo//EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAwEQACAgECBQEGBQUAAAAAAAAAAQIRAwQhBRITMUFRFDJCgaGxIzNhcfAiJDSR0f/aAAwDAQACEQMRAD8AwTRv+iUhRuv6pXrLejsacdHY+CydLajf7Q7s8nNK6/qldR0KitJm1dj/AOOx8ESm2I2N2JuSaOOmmJPM5Jr1NSOPRTcxRAKVjxV7MyK87AqmDMFaboboTqO6qcW2WKWxbisWIHUtvfJKOBwFronUc1bQsZOLClosqs8Y4K01tggyROKjWwqe5mOisb2WrTG7VWfRuO9EhpnNFroRjQZSsrVTRnkFk1ThY5LfloiRqqMmxid5SzjJ9gJlvY/qDuV8odBS4G24IrskvK0tw3ZEpBPdJEg4TpgpBMgCSTpkQDpXSTogECpBNZSChBJ0kkQDhOmCdQgkxTpIkI2TpJ1CHgf849V9AeZRB6Rqn6A8yuJcphZXJm5Y0dmfSNU/QHmUw9JFT9Aea48qFkOdjdKJ2f8AOTU/QHmUSk9IlTI9rMIGI2ve9lwhKsbJ/DR/WTKbFeOJKo2/tCoe6Trqo3JyiMuBv5tm6KH8qbRH46tH6U66v0W7QfFDUNaRYzRyZ/SDRY+xd2NtzZm7bnXJdbHpJTipLyNh4dkywU01ueNjbu0R+U1g/TlUh0o2iPyyqHe969h/l2b83LLT/tTh29Jo4Nte9wD8VJaWUR5cLyr0PHR0x2iPy6oHe/4qQ6c7RH5fL4lh94XuFDtDE8B1i12QIvru3rULW6YQe8X96pWOzBmxvE+WR8/t6fbT/t8nlCf3UZvpC2p/bXHvbB/xXu5iYdWMP6LVA0sR/FRfqM+CPSKbR4kz0j7UH5UD3sh+CMPSXtQfj4z/AJcfwXsjqGD+ohP+XH8EB2zaU601Of8AKj+CHTCmeVQ+lPajfxkJ74h9hR2elXaW/wCSn/Kd/wA16U/YdEdaSlPfDF8ECTo9Qb6Kk/8ATD8EORBOCb6V68ax0p/QkH76Mz0uVm+npj/7R+8uud0c2f8A2Km8I2D7FWl6OUGI/ekIFrWDWgX+lpe/sQ6aGSZhM9L1RvpIT3PkH2FHZ6YJN9Ezwmd/wV2bo9QZn5LEBnfUfx/2syXZOz8/vQW3WfIPtTdEeOGcuyNzYPpTiqJ4oJaZ0PWvbG2QPEjQ9xs3ELA2JsL816HZeC7Ro6eKpoOoi6smqhxHE91xjZbUr3sqnJHldCyi4umMnTpJBRwnCYKSIBJJJKEEE4TJwiQdJJOoQZJOkoQ+TyVIFDJUgsbOigqiU6ZyUcEVa2T+Gj+u1VCVZ2Ufu0X94z3pkKze9HJ7FR9dnuK7EOXFej51hUD86P3FdhiXrdHG8Ef55Orw+X9vH+eQ5N1EqDXqV08om67LEE5Ybdx7jxC6yiq2ysDgRe3aG8HuXFItPUuY4OabEbx7isk9PbtHP1miWeO2zR2xKV1QodpslAF8L97TvPLird1laa2Z5rJiljlyyVMk4od0zioEpAqJMyWQXPuoSu3KGJK0WxhtZJ77Km9ylNIq0kiKLYwKm0Zfm+JWa9Hmfckqu8q1HQxw5Y0Ym1f6TQf4qH/cYveV4FtV331s/wDxcP8AuMXvqyZ/eOZqfzWJOmTqkzjhOmTqEEkkkiQdOmTqEHTpk6hBJJ0yhD5KcpgoblJqyM6K7hQVJxyUAmcUg4NysbL/AA0X94z9oKuUfZ5+6x/3jP2gmQrNboO+xqBzZ+8uubIuM6IOtJUjm33uXWMcva8Pjenj8/uzboJ/gxX7/ctCRTBVUFTD1pljT7G9SLQenJVYSImNZ5YqLFIM15BuMt4XXUFV1sbXb/Vd9Ya/HxXGY1pbFrurfhJ7D7A8juKzajBzRtd0Y9fp+rjtd0dK5yG5yZ7kCSRc6jhxgNI/NRL0Bz1B8mSrL+QjI9VKiTJTc9UaqayKRohj3IPKBIUN9QVWknKso0OLKG0f6Xs//Fw/7ka99K+da2oPy3Zg41kI/wD1jX0USsef3jjar81jpJk6pM46SSSJB06ZOoQYKSYIZqo7XxtsNTcWHioQME6ot2xSk2+U09+HWR38rq3FK1wu1zXDi0g+5QgRJJJQh8kFSCiQnCyHRQUKDlIKLkoxAlGoj90Z9dnvCCUWk9dv1m+9MKafRqwmqe/95y6Vr7Lkejrj8pqwfpOA/XcukJXueFK9NH5/dl2jf4S+ZdEwU+sWaXJsS6HSs19Wu5qdaptmWL1p4lOKpw5pXp2WR1MfJt9ckJ7LMhqwcjkUYvVLxNOmaoTjJWmdps6v6yMX9ZvZdz4FKSVczsauwSAH1Xdk+OntW3PIuJq8HTn+jObkwKOR12YV0qC+VAdIhmRZOQKxk5ZVnVL0aWRUqhysjAthCgbnIEjkz3oEsmSvjhbLHEydputV0BGrahjhyIewhetbD6XOnYAR90Az58143tF/31Rf3w/aatvZFaY3tcDmCFz9TjSyOLPN6+ThnbR7BFtpx3FTk20W7isykcJY2St3jtDgVCqXFzSy4puLZpxLHlgpJGn/AOQngUUbd5Fc7wVjcq1qJljwQ9DZ/l7kVJm3CdxWGEWEZo+0TB0IehU6cdMmRU1VTh5bUyQfc25glshLC5p4gAm2ui8v2V01r2Wj67rY9ME7RIPP1vauz6bdHYp3Mfcskf2XG4LXWsBk7IZcOC4qfobUAXYWyNzIObTbjn38VtxS5opszZIcrpG23p81tmzUMLrb43Fv+kg+9Fj6Y7NcS40OF9siGsaf1mm64mp2JVsGJ8MoByBsXeGV1U6h7Tm1wP5wt7wnpFds9GHTWm3NrGjg2srAByACdedjHw9jfikmpC2yTkwTuTNWQ3+QrQouCkxM5KP4BFThPaHeFEpN1TiB9lvtVVQ/Pk/3CtoTEb1hUP8ATKr60n7a2CV7vg/+Kv3f3EwOolgVPFS60HQqi9yE566pc8rNIuUHOVJtWRrnz3o3WAi4N0U0xeomFLlbpqm+R13cws0uTB9s1JRTQ+PO4StGyXLZp9oY2i/rDI8+a5qGpDu/gjslLTcLDqdKssafddjoRyxlv4N41CiZln9cDmomdYVoUaWol50irTvyVZ1QhOlTrSUJsSc9VppEnvVeR9lfHCoiTmkZ1fnU0fKS/tarlJJoqs7rz0v1/tCeN1l5niG2ol8vseb1v9WRs9S6C1uIOiJyIuO9a1YLEg7lwvRGswSsN94Xf7VHaBGjgCuZroc2NT9BOHzqbgUW6o6ANQjuK5SOsxAI1OFXurVKEWQ5bpntwU08EbgcD43HENWnFa9t+Shs7bVPJYidrQDcMLgwjQNyIHP/AOLB9KzvvuEcKdp83v8AguRGrt9ie6xK6GKP4aMeSX9TPY4QCb3aXuFrDNobnYXabHd7la2fRRuxg9vAwucRmXkC4I5i/ssvHIKl7L4JHtvqGOc0HyWnszpDVwyROZO84HggPOJvAgg7rZKxIqZ6kNnCws0AWGV4/iksH+cgjI0hvqcMzg3PPIYDYcklZS9Svc8pcmakSkFlN4RhScmaVIhKMDKQCchO1qICFO+1dUcy/wB4K18SwpMq6bx9zVdL17fg8603zZlhKlRbe9Cc9VHTlDNRyXSeZBcyy56gJi03BQOuBXSdC9k09U+T5SXYWljRhJba+pyVcsySspnkUVbM2GqDuR4fBEL16DF0Q2e18rTFiwSFrXF2TWgMN3X39o/qpO2dQNpmubEz5QQCRYHO+YsqFxSCpOLdtLt6jPMo0n5PPOsHFWYKs6G55gEldhMYwD1MbWnqxYuYAMZ1yI1A8EmVjGtaXyxxuGHrBaOzxbMDc08wjl4g49sbe1/Wi6eWWHeKb/Y56LHuY89zXIwglOkb/K3vW1N0kpGxuaaiO5bG0DG2zS22LK/LXmq7+mdCI8PWsxYQLi5zve+QSe3XdxUd63fj1NXtbSVK96e6VL1Mmqgkjt1jHMvpeyrl6P0o6Z0tSY+rc+zLk9l+ufLmueftyPc2Q/o/FNi12FwTySin6WhvaVW7VmpJIqskiznbWvpE/wAcIQzXSHSIDvcFJcS0kfj+j/4Z8mpvyWgC6qpQASS+wAzJO4AK/NQTM9eKVv1mPH2IXRGOSTaWzy4NGGpjNgSTa9/sX0WYwdQD3ry2vzxyZ5Th2ZkkudtnguxZ8Lx3r1kP6ynifvAsVsS7Kgf60Mbu9rVJuz42tLGtDWncMgskpqWNwfkrx4nDIppnNgZojgtd+x27i4e1Bk2U/cQe/Jcx4ZrwdRZYszgFagUX0Mrfmk92aJC0jUW70jTXcdNPseV+lI3rRygjH+p5+1cu3zyaeViBf23XSekx1613KOMey/2rmozk3kCPaV0cfuIw5PfYSyNS+sL6C9/JBCt0PzidLBp7j/8AE6K2XGyACxFyMr8t3sTo0bmgAObcjK/FJOIcukELCU4Y7QZk5ADMk8FlNwZpVyipZJnYImOe7g3dzJ0A71vbA6FPfaSqJjZqIm/hHfWPzRyGfcu6o6OOJoZE1rGjc0AeJ4nmkbQ1nG7O6EuNjUSYR9COxd4uOQ8AV0+z9i08FuriaCPnHtP8ytPBzCYjmpYrtniPSF4ZtKrJ06x3tAVd20G7g4+C3em2zXsrJXW7MtpWnjlYjzCxBSnK7mi97AkXNtcr3Xa02vy4sfLCqMTtOgDqsnRjvHJQMzz8zzKsGNmd5W5a5SE+wKP3L+sefqsP71k0uIah/F9EC2AxScGhWqKvqYcXVyBmK2KwB001CiHxZ5TOsLnJjbDj6xSbPFcARE30xSj/AI/aq/asz+JgDv2vWO1qn+Aa33AIElVM71qmc/puH2pOqwDbqIwQbEO6wuB55hTfWvbkGxDeC1gcCOPaJ+KR5cr7yf8AtkGp6MSZvmeM7Z9a8kZZiw/iymdlRWNsbnWuPubwCc8jiI5KJr5QBhkFj9BsbCDwNmhRkrJbAmaW5F7F0gy4jOxHwSNX3JRNmy5N0Dv1UT+TnjURs+u5jPeqT82gm5JuLk4gftG5JoGEm2eKwIIB0zu3+Lc1OUlF4UoGs0De54d+zdSEMW+oafqslP7qzmuyPhxDh3EZefFO3JpvlexFwCDbWzjmPBHlQaNICmGskzu5jAPa4IrKimaLiOV44uexo9gKyGCzbka2sR6uWoIt3I0OQ3HuycD3aH+PGUkCjqejm02tmjkhhZG5hu17n4rbtbCy9U2V0sDrNkLSeTmnycMj42K8e2c3Cy9sXHrI3+WIDh3+K6OhecAw9eWnMAmFwt+a452/jJUzdjR2PY6asbIOy6/EaEeCNiXl1HtKSPDbJo+m+xHda/vXT7K6UNf2S5ryLA2LS4X0zGR96roezqsSWJV4KljxdjgeI3jvCJiPC6lEC4kxAOoBUQ8KQKlEs809JXRkTztkisyQxtDgb4XkOIB5G3u0XATbFqIrYonEXIDmdtrr20t4a2XrvSyxnaDl9zAvlkLuzvqN/DVVKe+EEDWwAu+wjyz9m69zxQuth6vc8kLbGxBBGoORWhQMFrnicXdovTm0sbwA6JjwCGsDxmdBjdcZd/HPetDZmwqUEHqINMjgacTs+0Ru0OWaaO5XI85jjbYX10OiS9zhoow0AMa0AaZi3sSVtFdnzfHsZziAASSbADUlei9FehbKcCWUB05zF8xFybz5puiOzsRMzh6vZZ37yust3rnwtq2dDI62QP5EE/yNvAKeIpYyrUkVWCfRt4BZlYwt0A9q2cZVSsaSClnG1sGL33PO+lTS+2JosLDFvAuuNq6TELHLK4NvavQ9qsuXA38lyVUwA4HaX7DjuPDuR0+VxfLImWCatHIvp3AkGww3IvkXDlbVCa61xlY6jVdHV0YdkRZw0PA/BZL8Yu1ziH6BjGg3HeFvoyNUVYiBc3IcLYC02seJyUowBhc5oc04rC5GenzTcKLmEbx4I0dM61yCB4DLW6iQAbGnW4u0t7J1dnwtn4pw0Em5wjNwsLgHha+SPTQlwINgGm9zk/FbuvZSjpZMRAu1rhhJFyCMskwQGb3jEC45AhubiAN2XBQ4C+mnn7FqDZZcGtaLPF+0QBfPfc5J49hSn1nMHiSjTIZs4zIAwi+jTiaMuOdwnl+b6p7LfVu0X4OyFzzWzH0f4yeQViPYEW9zz5BHlYTnXWwtFyTncOAsDyO9PlhAsb3Od7tseDbZLrItiQD5hPeT9itxbMiGkbPEX96lMhxkTAcjl6xxBud+dv4C0KegkIsO1lcABzs+9oK6+GnaNGtHcAFegYlaJRh7J2fIGi8c4GmAloH6xIsFtxbHeWuaIGR3v2uukJzPrG1xi8CtSmCuxttp5HTw4KhhMWl6PyC2KSG4NwRGSfGxF/4yWkzZb7EOqZCCSSGtiYO4CxyV1r/A8FPElslEqVnVgAOcSPnON3eYWnBtVwyd2hx3rJxpXStjI6OOua7Sx96n8tAXMYiNFL+U8Pri44jX/tK78DKvJDpBVY5/zQ1oPcNRzuS0eKDERbtO3jrLZYjY9ltiNCNx3c1CzZnOcwhwJuWnlpcbjlqrUNMRbskEElpFnAOPzjexJ8VXzb7ljW2xZiGbgS65sHWAyaSSGAWvni878l0OyYySDYAkNv7MhfwO/csejpdwNhbTCQMeXbOovce3VdPs2JjBe97aa5efO5WiBRMLIcz5eSSnjCSBDk9jUwZBE0fRBPecyruFC2W8OhjP5oVgkKhLYvb3B4AlgCZ83JRbKSmFsJgCi+JEBCc2UIc3tXZ2K5Flye1Njh4IOq9EmaCsTaNLvAVeSHlFsJeGebSU7m9hx7Q9V30hwKoyQXcHG4c3Qi4I8l2O1aAPBNsxmCudkZckHJ4/1BW6fP8ADITLj8ozG0bPojmisgaNw8lawp+rW9MooC1iIGIoYphiNkBBqPHzTtYiNjU5iUO1iK1qUYsjhqnMShmtRWsSZGToCe5WYqSQ6Nd7kGyEGMVqJq1dkdF5p2l+JjA12E4iS7vsFqt6Lwx5y1TRxthb7ykdsW0YUKtsctF0myIfXqcZG4Ov7GrM2jtyjLm/Jo5nADOzHWPmq5L9Qp/oF11UmtPMj2rOG053fg6V3e8hvuRBHtCT+qiHcXn2lJsHc0RGU5YBqQFRbsGqf+Eqn9zAGj2BHZ0Ohd+EMkn13OPvQtBpg59oUzMnzxg8MTb+SVLJTzmzDj/WA9y06bonSs0hatSm2bFH6rWt7kU36AopbPoGMBwxtaTqQMyOF1ebByVgtA0KRdzQe7GWyGjiV+nH2qiHO3WVuBxsihWGTqGJJKE5fo3Ugs6s6jTuWw4LlacGMlzdWnPmF0FLWCRoI8VTHtTLpd7QV6gAiXSTCiaFIhJqcoEKr2qvNDdXTZCeAmIcztCktdcxtbZ9+0MiF6DUwNcFiVWzC7dkqJwadoujO1TODjGLK3aGoRmwO4FbdZ0fkxY4xZwU6agqx8xvetGLPtTKpwrsZMez5Dowq1HsaU7gO9bTNmVjvnNYOQRmdG5netO7wyV3VK6ZjM2Nb1ntCn8ip2+tKPMLej6Is+c57u8lXYOi8DfxYPfml6rJRyokpBpieeQJRWVTfxdK93eLe9dnFsmNujGjwCsNpANAEvUkTlOLa6rd6lO1n1iiDZ9e/WRjO5t12giAUw0cEOZ+pKRyEXR+c+vUy56hpLQfJHj6Jw6vxPP5xJ966nCpMYg2wmJT9H4GaRt8gr8VAwaNaPBaAanwoBKraZqK2EBFsmIRARDQpApNaiBqIBm9yHIUZBcorCRUSy6lZPZSwUJjbKzG5AARI0bBRYxJKKSATjmNLPWzxZeKG2QwuuPV3hJJJNDxZt01U14uEa6dJBboLECk5ySSlEBOeoHNJJMiEbJ7BJJQg+EKTbJJKUBhBZTDkkkQD40i9JJAIxemxlJJEA4KdJJQhK6kCkklYQgKdJJFAHCSSSIB7pXSSRIQeUKySSIB010kkCEgUWNJJEATEnSSQCf/2Q==',
      price: '120000',
    },
    {
      name: 'Dell XPS 13',
      image: 'data:image/jpeg;base64,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',
      price: '160000',
    },
    {
      name: 'HP Spectre x360',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDG-NOlC-LAreokao1f_mhrpl9pyFUQMdo9w&s',
      price: '160000',
    },
    {
      name: 'Lenovo ThinkPad X1',
      image: 'data:image/jpeg;base64,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',
      price: '120000',
    },
    {
      name: 'Microsoft Surface Laptop 4',
      image: 'data:image/jpeg;base64,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',
      price: '75000',
    },
    {
      name: 'Asus ZenBook 14',
      image: 'data:image/jpeg;base64,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',
      price: '120000',
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} added to cart successfully!`);
  };

  return (
    <div>
    {/* Render the Detail component at the top */}
    <Detail />
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-black mb-10">
          Explore Our Laptop Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 text-center">
                <h2 className="text-gray-800 text-2xl font-bold">{product.name}</h2>
                <p className="text-gray-600 text-xl font-semibold mt-2">Rs{product.price}</p>
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
    </div>
  );
};

export default Laptop;
