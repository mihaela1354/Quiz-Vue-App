<template>
  <div>
    <div>
      <div>
        <div>
          <h3>Registration</h3>
          <div class="d-flex justify-content-end social_icon">
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div>
          <form >
            <div>
              <div>
                <span>
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div>
              <div>
                <span>
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div>
              <div>
                <span>
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input type="password" name="rePassword" placeholder="re-password" />
            </div>

            <input type="submit" value="Register" />
          </form>
        </div>
        <div>
          <div>
            Already have an account?
            <router-link class="text-warning" to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>