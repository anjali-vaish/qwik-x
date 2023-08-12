import { component$ } from "@builder.io/qwik";

export const PostCard = component$(() => {
  return (
    <article class="card card-bordered rounded-none">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="avatar">
            <div class="w-11 h-11 rounded-full">
              <img
                src="https://pbs.twimg.com/profile_images/1650752290641547264/sb1RZ0Dj_400x400.jpg"
                width={44}
                height={44}
              />
            </div>
          </div>
          <div class="flex flex-col gap-0">
            <span class="font-bold">Khushboo Verma</span>
            <div class="leading-4 text-sm">
              <span> @khushbooverma_</span>
              <span> · </span>
              <span> 6h </span>
            </div>
          </div>
        </div>

        <div>
          <p>Work from Anywhere 💚🏝️</p>
        </div>
        <figure class="mt-3">
          <img
            src="https://pbs.twimg.com/media/F3U4J7tbgAAVJB2?format=webp&name=medium"
            alt="Post image"
            width={600}
            height={400}
            class="w-full rounded-2xl"
          />
        </figure>
      </div>
    </article>
  );
});
