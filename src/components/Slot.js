

let component = Vue.extend({
  template:`
  <div class="row">
  <div class="col s12 m7">
    <div class="card">
      <div class="card-image">
      <slot name="imagen"></slot>

      
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
</div>
`
})
Vue.component('imagen-dinmica',component)