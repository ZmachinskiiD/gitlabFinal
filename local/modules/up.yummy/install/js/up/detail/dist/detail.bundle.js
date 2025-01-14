/* eslint-disable */
this.BX = this.BX || {};
this.BX.Up = this.BX.Up || {};
(function (exports,main_core) {
	'use strict';

	var _templateObject;
	var Detail = /*#__PURE__*/function () {
	  function Detail() {
	    var _this = this;
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    babelHelpers.classCallCheck(this, Detail);
	    this.user = options.user;
	    this.recipe = options.recipe;
	    this.likeBtn = document.getElementById('like_btn');
	    this.featuredBtn = document.getElementById('add_to_featured_btn');
	    this.isRecipeInFeatured().then(function (r) {
	      return _this.reload();
	    });
	    this.isRecipeLiked().then(function (r) {
	      return _this.reload();
	    });
	    this.likeBtn.addEventListener('click', function () {
	      _this.like(_this.user, _this.recipe).then(function (r) {
	        return _this.reload();
	      });
	    });
	    this.featuredBtn.addEventListener('click', function () {
	      _this.addToFeatured(_this.user, _this.recipe).then(function (r) {
	        return _this.reload();
	      });
	    });
	    this.reload();
	  }
	  babelHelpers.createClass(Detail, [{
	    key: "reload",
	    value: function reload() {
	      var _this2 = this;
	      this.loadLikesCount(this.recipe).then(function (likesCount) {
	        _this2.likesCount = likesCount;
	        _this2.render();
	      });
	      this.isRecipeLiked(this.user, this.recipe).then(function (isLiked) {
	        _this2.isLiked = isLiked;
	        _this2.render();
	      });
	      this.isRecipeInFeatured(this.user, this.recipe).then(function (isFeatured) {
	        _this2.isFeatured = isFeatured;
	        _this2.render();
	      });
	    }
	  }, {
	    key: "like",
	    value: function like(user, recipe) {
	      var _this3 = this;
	      return new Promise(function (resolve, reject) {
	        BX.ajax.runAction('up:yummy.detail.like', {
	          data: {
	            recipe: recipe,
	            user: user
	          }
	        }).then(function (response) {
	          console.log('success');
	          _this3.reload();
	        })["catch"](function (error) {
	          console.error(error);
	        });
	      });
	    }
	  }, {
	    key: "addToFeatured",
	    value: function addToFeatured(user, recipe) {
	      var _this4 = this;
	      return new Promise(function (resolve, reject) {
	        BX.ajax.runAction('up:yummy.detail.addToFeatured', {
	          data: {
	            recipe: recipe,
	            user: user
	          }
	        }).then(function (response) {
	          console.log('success');
	          _this4.reload();
	        })["catch"](function (error) {
	          console.error(error);
	        });
	      });
	    }
	  }, {
	    key: "loadLikesCount",
	    value: function loadLikesCount(recipe) {
	      return new Promise(function (resolve, reject) {
	        BX.ajax.runAction('up:yummy.detail.getLikesCount', {
	          data: {
	            recipe: recipe
	          }
	        }).then(function (response) {
	          resolve(response.data);
	        })["catch"](function (error) {
	          console.error(error);
	        });
	      });
	    }
	  }, {
	    key: "isRecipeLiked",
	    value: function isRecipeLiked(user, recipe) {
	      return new Promise(function (resolve, reject) {
	        BX.ajax.runAction('up:yummy.detail.isRecipeLiked', {
	          data: {
	            user: user,
	            recipe: recipe
	          }
	        }).then(function (response) {
	          resolve(response.data);
	        })["catch"](function (error) {
	          console.error(error);
	        });
	      });
	    }
	  }, {
	    key: "isRecipeInFeatured",
	    value: function isRecipeInFeatured(user, recipe) {
	      return new Promise(function (resolve, reject) {
	        BX.ajax.runAction('up:yummy.detail.isRecipeInFeatured', {
	          data: {
	            user: user,
	            recipe: recipe
	          }
	        }).then(function (response) {
	          resolve(response.data);
	        })["catch"](function (error) {
	          console.error(error);
	        });
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var counter = document.getElementById('likes_counter');
	      counter.innerHTML = '';
	      var likesNumber = main_core.Tag.render(_templateObject || (_templateObject = babelHelpers.taggedTemplateLiteral(["<p>", " \u2764\uFE0F</p>"])), this.likesCount);
	      counter.appendChild(likesNumber);
	      if (this.isLiked === true) {
	        this.likeBtn.className = "ui-btn ui-btn-lg ui-btn-danger";
	        likesNumber.style.color = 'white';
	      } else if (this.isLiked === false) {
	        this.likeBtn.className = "ui-btn ui-btn-lg ui-btn-success";
	        likesNumber.style.color = 'black';
	      }
	      if (this.isFeatured === true) {
	        this.featuredBtn.className = "ui-btn ui-btn-lg ui-btn-danger ui-btn-icon-remove";
	        this.featuredBtn.textContent = "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E";
	      } else if (this.isFeatured === false) {
	        this.featuredBtn.className = "ui-btn ui-btn-lg ui-btn-success ui-btn-icon-add";
	        this.featuredBtn.textContent = "\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435";
	      }
	    }
	  }]);
	  return Detail;
	}();

	exports.Detail = Detail;

}((this.BX.Up.Yummy = this.BX.Up.Yummy || {}),BX));
