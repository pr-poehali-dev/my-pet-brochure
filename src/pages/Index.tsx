export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden notebook-bg">
      <div className="card-frame relative z-10 w-full max-w-sm">
        <div className="corner-doodle top-left">✦</div>
        <div className="corner-doodle top-right">✦</div>
        <div className="corner-doodle bottom-left">✦</div>
        <div className="corner-doodle bottom-right">✦</div>

        {/* Title */}
        <div className="title-sticker">
          <span>My Pet 🐾</span>
        </div>

        {/* Photo */}
        <div className="photo-wrapper mt-10 mb-6 mx-auto">
          <img
            src="https://cdn.poehali.dev/files/0e6ea357-edfc-44c9-855f-a5d28a963338.jpeg"
            alt="Baron"
            className="dog-photo"
          />
          <div className="photo-shine" />
        </div>

        {/* Brochure text */}
        <div className="brochure-text">
          <p>I have a pet. It is a dog. His name is Baron. He is black. He is big. Baron is fat. He can run, jump and swim. He can't fly and climb. I love my dog!</p>
        </div>
      </div>
    </div>
  );
}
