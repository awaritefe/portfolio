<template>
  <div class="md:container md:mx-auto p-12 my-12 bg-cover bg-[url('./images/bg4.jpg')]">
    <h2 class="pb-6">Get in contact with Daniel</h2>
    <form class="grid gap-6 w-3/5">
      <div class="form-group flex gap-4">
        <div class="inline-grid w-6/12">
          <label class="label" for="name">Full Name</label>
          <input class="p-2" type="text" id="name" name="name" placeholder="Jane Doe" />
        </div>
        <div class="inline-grid w-6/12">
          <label class="label" for="email">Email</label>
          <input
            class="p-2"
            type="email"
            id="email"
            name="email"
            placeholder="Jane.Doe@example.com"
          />
        </div>
      </div>
      <div class="inline-grid w-full">
        <label class="label" for="subject">Subject</label>
        <input class="p-2" type="subject" id="subject" name="subject" placeholder="Subject" />
      </div>
      <div class="inline-grid w-full">
        <label class="label" for="message">Message</label>
        <textarea
          class="min-h-[160px] p-2"
          type="message"
          id="message"
          name="message"
          placeholder="Message..."
        ></textarea>
      </div>
      <div class="inline-grid w-full">
        <input class="button p-2" type="submit" value="Send Message" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppForm'
}
</script>

<style scoped lang="scss"></style>
