import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Migisha Ivan",
      company: "Fellow Student",
      image: "https://i.pravatar.cc/150?img=11",
      text: "Byukusenge is a great developer and a great person to work with. He is always willing to help and is a great team player. He is also a great problem solver and always finds a way to get the job done."
    },
    {
      name: "Kivugo Fignole",
      company: "Friend",
      image: "https://i.pravatar.cc/150?img=2",
      text: "Byukusenge is a great person having known him, he has a great personality and has always been a great friend to me and others."
    }

  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Client Testimonials
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-100"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {/* {testimonial.role}  */}
                         <span className="text-blue-600">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center mt-4 gap-80 ">
                    <span className=' flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    </span>
                    <span className='ml-2'>
                    <button className='items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-200 hover:text-black transition-colors'>Rate</button>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 