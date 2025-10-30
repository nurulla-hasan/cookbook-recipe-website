
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSendSubscribeMutation } from '@/redux/feature/legal/legalApi';
import { ErrorToast, SuccessToast } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {

  const [sendSubscribe, { isLoading }] = useSendSubscribeMutation();

  const handleGetApp = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get('email') || '').toString().trim();

    if (!email) {
      ErrorToast('Please enter your email address');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      ErrorToast('Please enter a valid email address');
      return;
    }

    const payload = { email };

    try {
      await sendSubscribe(payload).unwrap();
      SuccessToast('Subscribe successfully');
      form.reset();
    } catch {
      ErrorToast('Subscribe failed');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3ea58e] to-[#1a7869] text-white">
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="text-left">
          <img
            src="/public/images/transparent-logo.png"
            alt="The Koumanis Diet"
            className='md:ml-20 mb-6'
          />

          <h1 className="text-3xl lg:text-5xl font-medium leading-tight text-black">
            Transform <span className="text-white">Your Health</span>
            <br className="hidden md:block" />
            with the Koumanis Diet
            <br className="hidden md:block" />
            <span className="text-white">Meal Planner</span>
          </h1>

          <p className="mt-5 text-black/90 max-w-xl text-lg">
            Join thousands who have achieved their health goals with our science-backed meal plans and fitness guidance.
          </p>

          <div className="mt-8">
            <p className="font-medium text-3xl">Get Desktop App <span className="text-white/70">+</span></p>
            <form onSubmit={handleGetApp} className="mt-3 flex flex-col gap-3 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input name="name" type="text" placeholder="name" className="h-12 w-full sm:flex-1 rounded-2xl bg-transparent border-white/40 text-white placeholder:text-white/70" />
                <Input name="email" type="email" placeholder="email" className="h-12 w-full sm:flex-1 rounded-2xl bg-transparent border-white/40 text-white placeholder:text-white/70" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button loading={isLoading} type="submit" className="h-12 w-full sm:w-fit rounded-2xl bg-[#a65a89] hover:bg-[#a65a89] text-white px-6">Get Desktop App</Button>
                <Link to="/auth/register" className="inline-block">
                  <Button variant="secondary" className="h-12 rounded-2xl bg-white text-[#1a7869] hover:bg-white/90 px-6">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </form>
            <p className="text-xs text-white/80 mt-2">Available on iPhone, iPad, Android, Windows, Mac & Linux</p>


          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="/public/images/mockup phone.png"
            alt="Koumanis Diet App Preview"
            className="w-72 h-80 sm:w-80 sm:h-[360px] md:w-[500px] md:h-[550px] drop-shadow-xl"
          />
          <div className="absolute bottom-10 right-10 text-lg font-semibold md:-bottom-10 md:right-[6%] md:text-2xl">
            Download for iOS & Android <span className="align-middle">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;